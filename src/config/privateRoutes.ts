import { route, redirect, map, } from 'navi';

import privateViews from 'config/privateViews.json';
import asyncForEach from 'utils/asyncForEach';
import upperCamelCaseToLowerCamelCase from 'utils/upperCamelCaseToLowerCamelCase';
import isAuthenticate from 'utils/isAuthenticate';

export default async () => {
  const routes = {};

  await asyncForEach(privateViews, async (privateView) => {
    const specifiConfiguration = await import(
      `views/private/config/${upperCamelCaseToLowerCamelCase(privateView.name)}`
    );
    const url = specifiConfiguration.default.url || privateView.path;

    routes[url] = map(() => {
      if (isAuthenticate()) {
        return route({
          ...specifiConfiguration.default,
          title: privateView.name,
          getView: () => import(
            `views/private/${privateView.name}.${privateView.extension}`
          ),
        });
      }

      return redirect('/');
    });
  });

  return { ...routes, };
};
