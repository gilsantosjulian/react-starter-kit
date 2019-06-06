import State from 'types/state'
import Action from 'types/action'
import homeReducer from './home/reducer'
import uiReducer from './ui/reducer'

export default (
  { home, ui, }: State, action: Action
): object => ({
  home: homeReducer(
    home, action
  ),
  ui: uiReducer(
    ui, action
  ),
})
