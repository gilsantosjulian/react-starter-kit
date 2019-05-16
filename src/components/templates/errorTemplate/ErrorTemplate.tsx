import React, { ReactElement, ReactNode, } from 'react';

import * as styles from 'templatesStyles/errorTemplate/errorTemplate.scss';

const ErrorTemplate: React.SFC<ErrorTemplateProps> = (
  { children, }
): ReactElement => (
  <div className={styles.container}>{children}</div>
);

interface ErrorTemplateProps {
  children: ReactNode;
}

export default ErrorTemplate;
