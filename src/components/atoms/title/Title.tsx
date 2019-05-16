import React, { ReactElement, } from 'react';
import { FormattedMessage, } from 'react-intl';

import * as styles from 'atomsStyles/title/title.scss';

const Title: React.SFC<TitleProps> = (
  { textId, }
): ReactElement => (
  <h3 className={styles.text}>
    <FormattedMessage id={textId} />
  </h3>
);

interface TitleProps {
  textId: string;
}

export default Title;
