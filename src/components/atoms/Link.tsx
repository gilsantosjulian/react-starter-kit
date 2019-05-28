import React, { ReactElement, } from 'react';

import * as styles from 'assets/styles/atoms/link.scss';

const Link: React.SFC<LinkProps> = (
  { href, title, }
): ReactElement => (
  <a className={styles.a} href={href} title={title}>
    {title}
  </a>
);

interface LinkProps {
  title: string;
  href: string;
}

export default Link;
