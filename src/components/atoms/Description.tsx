import React, { ReactElement, } from 'react';
import { FormattedMessage, } from 'react-intl';

import * as styles from 'assets/styles/atoms/description.scss';

const Description: React.SFC<DescriptionProps> = (
  { textId, text, }
): ReactElement => (
  <h5 className={styles.text}>{text || <FormattedMessage id={textId} />}</h5>
);

interface DescriptionProps {
  textId?: string;
  text?: string;
}

export default Description;
