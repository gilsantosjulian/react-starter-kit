import actionHelper from 'utils/actionHelper'
import { HIDE_SPINNER, SHOW_SPINNER, } from 'state/ui/spinner/actionTypes'
import requester from 'services/requester'
import Response from 'types/response'
import {
  WILL_FETCH_RICKY_AND_MORTY_DATA,
  FETCHING_RICKY_AND_MORTY_DATA,
  DID_FETCH_RICKY_AND_MORTY_DATA,
} from './actionTypes'

export default async (dispatch: any): Promise<void> => {
  dispatch(
    actionHelper(
      SHOW_SPINNER
    )
  )
  dispatch(
    actionHelper(
      WILL_FETCH_RICKY_AND_MORTY_DATA
    )
  )

  const url = 'https://rickandmortyapi.com/api/character'
  try {
    const response: Response = await requester.get(
      url
    )
    const { results, } = response.data

    dispatch(
      actionHelper(
        FETCHING_RICKY_AND_MORTY_DATA,
        results.map(
          (
            item: any
          ): object => ({
            id: item.id,
            name: item.name,
            species: item.species,
            status: item.status,
            image: item.image,
          }),
        ),
      ),
    )
  } catch (error) {
    dispatch(
      actionHelper(
        FETCHING_RICKY_AND_MORTY_DATA, error, true
      )
    )
  }

  dispatch(
    actionHelper(
      HIDE_SPINNER
    )
  )
  dispatch(
    actionHelper(
      DID_FETCH_RICKY_AND_MORTY_DATA
    )
  )
}
