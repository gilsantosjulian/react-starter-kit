import actionCreator from 'utils/actionCreator'
import { HIDE_SPINNER, SHOW_SPINNER, } from 'state/modules/ui/spinner/actionTypes'
import requester from 'utils/requester'
import Response from 'types/response'
import {
  WILL_FETCH_RICKY_AND_MORTY_DATA,
  FETCHING_RICKY_AND_MORTY_DATA,
  DID_FETCH_RICKY_AND_MORTY_DATA,
} from './actionTypes'

export default async (dispatch: any): Promise<void> => {
  dispatch(
    actionCreator(
      SHOW_SPINNER
    )
  )
  dispatch(
    actionCreator(
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
      actionCreator(
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
      actionCreator(
        FETCHING_RICKY_AND_MORTY_DATA, error, true
      )
    )
  }

  dispatch(
    actionCreator(
      HIDE_SPINNER
    )
  )
  dispatch(
    actionCreator(
      DID_FETCH_RICKY_AND_MORTY_DATA
    )
  )
}
