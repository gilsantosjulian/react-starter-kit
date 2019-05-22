export default (
  draft
): void => {
  draft.status.wasAFail = false;
  draft.status.error = null;
  draft.status.wasASuccess = false;
  draft.status.isRunning = false;
};
