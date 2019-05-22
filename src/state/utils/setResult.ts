export default (
  draft, action, key
): void => {
  draft.status.wasASuccess = true;
  draft[key] = action.payload;
};
