import homeReducer from './home/reducer';
import uiReducer from './ui/reducer';

export default (
  { home, ui, }, action
): object => ({
  home: homeReducer(
    home, action
  ),
  ui: uiReducer(
    ui, action
  ),
});
