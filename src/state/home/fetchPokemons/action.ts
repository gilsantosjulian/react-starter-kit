import actionHelper from 'utils/actionHelper';
import { HIDE_SPINNER, SHOW_SPINNER, } from 'state/ui/spinner/actionTypes';
import requester from 'services/requester';
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

  requester
    .get(
      'https://pokeapi.co/api/v2/pokemon'
    )
    .then(
      (
        response
      ): Promise<any> => Promise.all(
        response.data.results.map(
          (
            item
          ): Promise<Response> => requester.get(
            item.url
          )
        ),
      ),
    )
    .then(
      (
        responses
      ): void => dispatch(
        actionHelper(
          FETCHING_POKEMONS,
          responses.map(
            (
              response
            ): object => ({
              name: response.data.name,
              image: response.data.sprites.front_shiny,
            }),
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
