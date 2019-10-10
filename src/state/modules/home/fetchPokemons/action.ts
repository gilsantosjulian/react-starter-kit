import actionCreator from 'utils/actionCreator'
import { HIDE_SPINNER, SHOW_SPINNER, } from 'state/modules/ui/spinner/actionTypes'
import requester from 'utils/requester'
import Response from 'types/response'
import {
  WILL_FETCH_POKEMONS,
  FETCHING_POKEMONS,
  DID_FETCH_POKEMONS,
} from './actionTypes'

export default async (dispatch: any): Promise<void> => {
  dispatch(
    actionCreator(
      SHOW_SPINNER
    )
  )
  dispatch(
    actionCreator(
      WILL_FETCH_POKEMONS
    )
  )

  try {
    const response: Response = await requester.get(
      'https://pokeapi.co/api/v2/pokemon'
    )
    const requests = response.data.results.map(
      (
        item: any
      ): Promise<object> => requester.get(
        item.url
      ),
    )
    const responses: Response[] = await Promise.all(
      requests
    )
    const data = responses.map(
      (
        res: Response
      ): object => ({
        name: res.data.name,
        image: res.data.sprites.front_shiny,
      }),
    )

    dispatch(
      actionCreator(
        FETCHING_POKEMONS, data
      )
    )
  } catch (error) {
    dispatch(
      actionCreator(
        FETCHING_POKEMONS, error, true
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
      DID_FETCH_POKEMONS
    )
  )
}
