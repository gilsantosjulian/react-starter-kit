import { mount, } from 'navi';

import getPublicViews from 'config/publicRoutes';
import getPrivateViews from 'config/privateRoutes';

const getViews = async () => {
  const publicViews = await getPublicViews();
  const privateViews = await getPrivateViews();

  return {
    ...privateViews,
    ...publicViews,
  };
};

export default async () => mount(
  await getViews()
);
