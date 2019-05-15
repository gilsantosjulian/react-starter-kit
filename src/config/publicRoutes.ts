import { route, } from 'navi';

import publicViews from 'config/publicViews.json';
import asyncForEach from 'utils/asyncForEach';
import upperCamelCaseToLowerCamelCase from 'utils/upperCamelCaseToLowerCamelCase';

export default async () => {
  const routes = {};

  await asyncForEach(
    publicViews, async (publicView) => {
      const specifiConfiguration = await import(
        `views/public/config/${upperCamelCaseToLowerCamelCase(
          publicView.name
        )}`
      );
      const url = specifiConfiguration.default.url || publicView.path;

      routes[url] = route(
        {
          ...specifiConfiguration.default,
          title: publicView.name,
          getView: () => import(
            `views/public/${publicView.name}.${publicView.extension}`
          ),
        }
      );
    }
  );

  return { ...routes, };
};
