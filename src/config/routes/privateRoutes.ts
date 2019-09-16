import {
  route, redirect, map, Matcher, 
} from 'navi'

import privateViews from 'config/routes/privateViews.json'
import asyncForEach from 'utils/asyncForEach'
import upperCamelCaseToLowerCamelCase from 'utils/upperCamelCaseToLowerCamelCase'
import isAuthenticated from 'config/authentication/isAuthenticated'
import Route from 'types/route'

export default async (): Promise<object> => {
  const routes: any = {}

  await asyncForEach(
    privateViews,
    async (privateView: Route): Promise<void> => {
      const specifiConfiguration = await import(
        `pages/private/config/${upperCamelCaseToLowerCamelCase(
          privateView.name
        )}`
      )
      const path = specifiConfiguration.default.path || privateView.path

      routes[path] = map(
        (): Matcher<{}, {}> => {
          if (isAuthenticated()) {
            return route(
              {
                ...specifiConfiguration.default,
                title: privateView.name,
                getView: (): Promise<object> => import(
                  `pages/private/${privateView.name}.${privateView.extension}`
                ),
              }
            )
          }

          return redirect(
            '/'
          )
        },
      )
    },
  )

  return { ...routes, }
}
