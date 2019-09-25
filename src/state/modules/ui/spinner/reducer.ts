import produce from 'immer'

import setResult from 'state/modules/utils/setResult'
import Action from 'types/action'
import Draft from 'types/draft'
import { Spinner, } from 'types/state'
import { SHOW_SPINNER, HIDE_SPINNER, } from './actionTypes'

export default (
  state: Spinner, action: Action
): object => produce(
  state,
  (
    draft: Draft
  ): void => {
    switch (action.type) {
      case SHOW_SPINNER:
        setResult(
          draft,
          {
            payload: true,
          },
          'visibility',
        )
        break

      case HIDE_SPINNER:
        setResult(
          draft,
          {
            payload: false,
          },
          'visibility',
        )
        break

      default:
        break
    }
  },
)
