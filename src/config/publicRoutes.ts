import { route, } from 'navi';

import publicViews from 'config/publicViews.json';
import asyncForEach from 'utils/asyncForEach';
import upperCamelCaseToLowerCamelCase from 'utils/upperCamelCaseToLowerCamelCase';

export default async (): Promise<object> => {
  const routes = {};

  await asyncForEach(
    publicViews,
    async (publicView): Promise<void> => {
      const specifiConfiguration = await import(
        `pages/public/config/${upperCamelCaseToLowerCamelCase(
          publicView.name
        )}`
      );
      const url = specifiConfiguration.default.url || publicView.path;

      routes[url] = route(
        {
          ...specifiConfiguration.default,
          title: publicView.name,
          getView: (): Promise<object> => import(
            `pages/public/${publicView.name}.${publicView.extension}`
          ),
        }
      );
    },
  );

  return { ...routes, };
};
