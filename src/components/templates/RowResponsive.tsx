import React, { ReactElement, } from 'react';

import * as styles from 'assets/styles/templates/rowResponsive.scss';

const RowResponsive: React.SFC<RowResponsiveProps> = (
  {
    left,
    children,
    right,
  }
): ReactElement => (
  <div className={styles.container}>
    <div className={styles.left}>{left}</div>
    <div className={styles.center}>{children}</div>
    <div className={styles.right}>{right}</div>
  </div>
);

interface RowResponsiveProps {
  left: ReactElement;
  right: ReactElement;
}

export default RowResponsive;
