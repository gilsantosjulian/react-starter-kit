import State from 'types/state'
import Action from 'types/action'
import homeReducer from './home/reducer'
import uiReducer from './ui/reducer'
import middlewares from './middlewares'

export default (
  { home, ui, }: State, action: Action
): object => {
  middlewares(
    { home, ui, }, action
  )

  return {
    home: homeReducer(
      home, action
    ),
    ui: uiReducer(
      ui, action
    ),
  }
}
