import {
  route, redirect, map, Matcher, 
} from 'navi';

import privateViews from 'config/privateViews.json';
import asyncForEach from 'utils/asyncForEach';
import upperCamelCaseToLowerCamelCase from 'utils/upperCamelCaseToLowerCamelCase';
import isAuthenticated from 'utils/isAuthenticated';

export default async (): Promise<object> => {
  const routes = {};

  await asyncForEach(
    privateViews,
    async ({ name, extension, path, }): Promise<void> => {
      const specifiConfiguration = await import(
        `views/private/config/${upperCamelCaseToLowerCamelCase(
          name
        )}`
      );
      const url = specifiConfiguration.default.url || path;

      routes[url] = map(
        (): Matcher<{}, {}> => {
          if (isAuthenticated()) {
            return route(
              {
                ...specifiConfiguration.default,
                title: name,
                getView: (): Promise<object> => import(
                  `views/private/${name}.${extension}`
                ),
              }
            );
          }

          return redirect(
            '/'
          );
        },
      );
    },
  );

  return { ...routes, };
};
