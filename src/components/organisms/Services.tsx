import React, { ReactElement, } from 'react';

import * as styles from 'assets/styles/organisms/services.scss';

const Services: React.SFC<ServicesProps> = (
  { services, }
): ReactElement => (
  <div className={styles.row}>{services}</div>
);
interface ServicesProps {
  services: ReactElement[];
}

export default Services;
