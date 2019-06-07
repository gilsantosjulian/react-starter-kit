import Draft from 'types/draft'

export default (
  draft: Draft
): void => {
  draft.status.wasAFail = false
  draft.status.error = null
  draft.status.wasASuccess = false
  draft.status.isRunning = false
}
