import actionHelper from 'utils/actionHelper'
import axios from 'axios'
import {
  WILL_FETCH_RICKY_AND_MORTY_DATA,
  FETCHING_RICKY_AND_MORTY_DATA,
  DID_FETCH_RICKY_AND_MORTY_DATA,
} from './actionTypes'

export default (
  dispatch
): void => {
  dispatch(
    actionHelper(
      WILL_FETCH_RICKY_AND_MORTY_DATA
    )
  )
  const url = 'https://rickandmortyapi.com/api/character'
  const options: object = {
    url,
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': '*',
    },
    mode: 'cors',
    cache: 'default',
  }

  axios(
    url, options
  )
    .then(
      (
        response
      ): any[] => response.data.results,
    )
    .then(
      (
        data
      ): void => dispatch(
        actionHelper(
          FETCHING_RICKY_AND_MORTY_DATA,
          data.map(
            (
              item
            ): object => ({
              id: item.id,
              name: item.name,
              species: item.species,
              status: item.status,
              image: item.image,
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
          FETCHING_RICKY_AND_MORTY_DATA, error, true
        )
      ),
    )
    .finally(
      (): void => dispatch(
        actionHelper(
          DID_FETCH_RICKY_AND_MORTY_DATA
        )
      )
    )
}
