import produce from 'immer';

import setResult from 'state/utils/setResult';
import { SHOW_SPINNER, HIDE_SPINNER, } from './actionTypes';

export default (
  state, action
): object => produce(
  state,
  (
    draft
  ): void => {
    switch (action.type) {
      case SHOW_SPINNER:
        setResult(
          draft,
          {
            payload: true,
          },
          'visibility',
        );
        break;

      case HIDE_SPINNER:
        setResult(
          draft,
          {
            payload: false,
          },
          'visibility',
        );
        break;

      default:
        break;
    }
  },
);
