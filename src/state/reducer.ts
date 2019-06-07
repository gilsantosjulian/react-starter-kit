import State from 'types/state'
import Action from 'types/action'
import homeReducer from './home/reducer'
import privateReducer from './private/reducer'
import uiReducer from './ui/reducer'
import middlewares from './middlewares'

export default (
  { home, ui, priv, }: State, action: Action
): object => {
  middlewares(
    { home, ui, priv, }, action
  )

  return {
    home: homeReducer(
      home, action
    ),
    ui: uiReducer(
      ui, action
    ),
    priv: privateReducer(
      priv, action
    ),
  }
}
