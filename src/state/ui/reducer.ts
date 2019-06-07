import { Ui, } from 'types/state'
import Action from 'types/action'
import spinnerReducer from './spinner/reducer'

export default (
  { spinner, }: Ui, action: Action
): object => ({
  spinner: spinnerReducer(
    spinner, action
  ),
})
