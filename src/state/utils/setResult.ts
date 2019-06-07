import Draft from 'types/draft'
import Action from 'types/action'

export default (
  draft: Draft, action: Action, key: string
): void => {
  if (draft.status && draft.status.wasASuccess) draft.status.wasASuccess = true
  draft[key] = action.payload
}
