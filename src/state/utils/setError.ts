import Draft from 'types/draft'
import Action from 'types/action'

export default (
  draft: Draft, action: Action
): void => {
  draft.status.wasAFail = true
  draft.status.error = action.payload
}
