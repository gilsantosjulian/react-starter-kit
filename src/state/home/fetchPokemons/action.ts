import actionHelper from 'utils/actionHelper';
import { HIDE_SPINNER, SHOW_SPINNER, } from 'state/ui/spinner/actionTypes';
import {
  WILL_FETCH_POKEMONS,
  FETCHING_POKEMONS,
  DID_FETCH_POKEMONS,
} from './actionTypes';

export default (
  dispatch
): void => {
  dispatch(
    actionHelper(
      SHOW_SPINNER
    )
  );
  dispatch(
    actionHelper(
      WILL_FETCH_POKEMONS
    )
  );

  fetch(
    'https://pokeapi.co/api/v2/pokemon'
  )
    .then(
      (
        response
      ): Promise<any> => response.json()
    )
    .then(
      (
        data
      ): Promise<any> => Promise.all(
        data.results.map(
          (
            item
          ): Promise<Response> => fetch(
            item.url
          )
        )
      ),
    )
    .then(
      (
        responses
      ): Promise<any> => Promise.all(
        responses.map(
          (
            response
          ): Promise<any> => response.json()
        )
      ),
    )
    .then(
      (
        data
      ): void => dispatch(
        actionHelper(
          FETCHING_POKEMONS,
          data.map(
            (
              item
            ): object => ({ name: item.name, image: item.sprites.front_shiny, }),
          ),
        ),
      ),
    )
    .catch(
      (
        error
      ): void => dispatch(
        actionHelper(
          FETCHING_POKEMONS, error, true
        )
      )
    )
    .finally(
      (): void => {
        dispatch(
          actionHelper(
            HIDE_SPINNER
          )
        );
        dispatch(
          actionHelper(
            DID_FETCH_POKEMONS
          )
        );
      },
    );
};
