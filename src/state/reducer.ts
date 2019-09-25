import State from 'types/state'
import Action from 'types/action'
import homeReducer from './modules/home/reducer'
import privateReducer from './modules/private/reducer'
import uiReducer from './modules/ui/reducer'
import middlewares from './middlewaresRegister'

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
