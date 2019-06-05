import spinnerReducer from './spinner/reducer';

export default (
  { spinner, }, action
): object => ({
  spinner: spinnerReducer(
    spinner, action
  ),
});
