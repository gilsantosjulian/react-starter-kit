import homeReducer from './home/reducer';

export default (
  { home, }, action
): object => ({
  home: homeReducer(
    home, action
  ),
});
