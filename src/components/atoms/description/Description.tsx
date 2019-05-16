import React, { ReactElement, } from 'react';
import { FormattedMessage, } from 'react-intl';

import * as styles from 'atomsStyles/description/description.scss';

const Description: React.SFC<DescriptionProps> = (
  { textId, }
): ReactElement => (
  <h5 className={styles.text}>
    <FormattedMessage id={textId} />
  </h5>
);

interface DescriptionProps {
  textId: string;
}

export default Description;
