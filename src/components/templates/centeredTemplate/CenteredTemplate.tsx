import React, { ReactElement, ReactNode, } from 'react';

import * as styles from 'templatesStyles/centeredTemplate/centeredTemplate.scss';

const CenteredTemplate: React.SFC<CenteredTemplateProps> = (
  {
    children,
  }
): ReactElement => <div className={styles.container}>{children}</div>;

interface CenteredTemplateProps {
  children: ReactNode;
}

export default CenteredTemplate;
