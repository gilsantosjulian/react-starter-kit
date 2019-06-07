import produce from 'immer'

import setInitialData from 'state/utils/setInitialData'
import setError from 'state/utils/setError'
import setResult from 'state/utils/setResult'
import setDefaultData from 'state/utils/setDefaultData'
import Action from 'types/action'
import Draft from 'types/draft'
import { FetchPokemons, } from 'types/state'
import {
  WILL_FETCH_POKEMONS,
  FETCHING_POKEMONS,
  DID_FETCH_POKEMONS,
} from './actionTypes'

export default (
  state: FetchPokemons, action: Action
): object => produce(
  state,
  (
    draft: Draft
  ): void => {
    switch (action.type) {
      case WILL_FETCH_POKEMONS:
        setInitialData(
          draft
        )
        break

      case FETCHING_POKEMONS:
        if (action.error) {
          setError(
            draft, action
          )
          break
        }

        setResult(
          draft, action, 'pokemons'
        )
        break

      case DID_FETCH_POKEMONS:
        setDefaultData(
          draft
        )
        break

      default:
        break
    }
  },
)
