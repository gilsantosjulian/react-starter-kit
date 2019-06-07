import Draft from 'types/draft'

export default (
  draft: Draft
): void => {
  draft.status.isRunning = true
}
