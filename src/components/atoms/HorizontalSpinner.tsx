import React, { ReactElement, } from 'react';

import * as styles from 'atomsStyles/horizontalSpinner.scss';
import { useGlobalState, } from 'state/StoreProvider';

const HorizontalSpinner: React.SFC = (): ReactElement => {
  const [ state, ] = useGlobalState();

  if (state.ui.spinner.visibility) return <div className={styles.container} />;

  return null;
};

export default HorizontalSpinner;
