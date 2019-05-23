export default (
  draft, action, key
): void => {
  if (draft.status && draft.status.wasASuccess) draft.status.wasASuccess = true;
  draft[key] = action.payload;
};
