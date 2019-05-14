import React from 'react';
import { useCurrentRoute, } from 'react-navi';

export default () => {
  const route = useCurrentRoute();

  console.log(route);

  return <div>Home</div>;
};
