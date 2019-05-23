import React, { ReactElement, } from 'react';

const Link: React.SFC<LinkProps> = (
  { path, title, }
): ReactElement => (
  <a href={path} title={title}>
    {title}
  </a>
);

interface LinkProps {
  path: string;
  title: string;
  href: string;
}

export default Link;
