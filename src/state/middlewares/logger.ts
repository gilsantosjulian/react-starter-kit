import State from 'types/state'
import Action from 'types/action'

const logger = require(
  'utils/logger'
)()

export default (
  previousState: State, action: Action, currentState: State
): void => {
  if (action) {
    logger.custom(
      `===> ${action.type}`, action, '#987AEF'
    )
  }

  if (previousState) {
    logger.custom(
      'Previous State', previousState, '#123987'
    )
  }

  if (currentState) {
    logger.custom(
      'Current State', currentState, '#876590'
    )
  }
}
