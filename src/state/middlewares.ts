import State from 'types/state'
import Action from 'types/action'
import logger from 'state/middlewares/logger'

export default (
  previousState?: State, action?: Action, currentState?: State
): void => {
  logger(
    previousState, action, currentState
  )
}
