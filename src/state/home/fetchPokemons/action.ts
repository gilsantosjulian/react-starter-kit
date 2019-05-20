import actionHelper from 'utils/actionHelper';
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
      ): void => dispatch(
        actionHelper(
          FETCHING_POKEMONS, data.results
        )
      )
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
      (): void => dispatch(
        actionHelper(
          DID_FETCH_POKEMONS
        )
      )
    );
};
