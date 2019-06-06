import produce from 'immer'

import setInitialData from 'state/utils/setInitialData'
import setError from 'state/utils/setError'
import setResult from 'state/utils/setResult'
import setDefaultData from 'state/utils/setDefaultData'
import {
  WILL_FETCH_RICKY_AND_MORTY_DATA,
  FETCHING_RICKY_AND_MORTY_DATA,
  DID_FETCH_RICKY_AND_MORTY_DATA,
} from './actionTypes'

export default (
  state, action
): object => produce(
  state,
  (
    draft
  ): void => {
    console.log(
      'TYPE'
    )

    console.log(
      action.type
    )
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
