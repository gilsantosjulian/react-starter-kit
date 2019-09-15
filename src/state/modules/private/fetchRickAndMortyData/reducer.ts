import produce from 'immer'
import Action from 'types/action'
import Draft from 'types/draft'
import { FetchRickAndMortyData, } from 'types/state'

import setInitialData from 'state/modules/utils/setInitialData'
import setError from 'state/modules/utils/setError'
import setResult from 'state/modules/utils/setResult'
import setDefaultData from 'state/modules/utils/setDefaultData'
import {
  WILL_FETCH_RICKY_AND_MORTY_DATA,
  FETCHING_RICKY_AND_MORTY_DATA,
  DID_FETCH_RICKY_AND_MORTY_DATA,
} from './actionTypes'

export default (
  state: FetchRickAndMortyData, action: Action
): object => produce(
  state,
  (
    draft: Draft
  ): void => {
    switch (action.type) {
      case WILL_FETCH_RICKY_AND_MORTY_DATA:
        setInitialData(
          draft
        )
        break

      case FETCHING_RICKY_AND_MORTY_DATA:
        if (action.error) {
          setError(
            draft, action
          )
          break
        }

        setResult(
          draft, action, 'rickyAndMortyData'
        )
        break

      case DID_FETCH_RICKY_AND_MORTY_DATA:
        setDefaultData(
          draft
        )
        break

      default:
        break
    }
  },
)
