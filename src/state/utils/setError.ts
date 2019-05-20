export default (
  draft, action
): void => {
  draft.status.wasAFail = true;
  draft.status.error = action.payload;
};
