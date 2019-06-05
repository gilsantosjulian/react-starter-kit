import React, { ReactElement, } from 'react';
import { FormattedMessage, } from 'react-intl';

import * as styles from 'assets/styles/atoms/title.scss';

const Title: React.SFC<TitleProps> = (
  { textId, text, }
): ReactElement => (
  <h3 className={styles.text}>{text || <FormattedMessage id={textId} />}</h3>
);

interface TitleProps {
  textId?: string;
  text?: string;
}

export default Title;
