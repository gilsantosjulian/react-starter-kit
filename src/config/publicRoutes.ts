import { route, } from 'navi'

import publicViews from 'config/publicViews.json'
import asyncForEach from 'utils/asyncForEach'
import upperCamelCaseToLowerCamelCase from 'utils/upperCamelCaseToLowerCamelCase'
import Route from 'types/route'

export default async (): Promise<object> => {
  const routes: any = {}

  await asyncForEach(
    publicViews,
    async (publicView: Route): Promise<void> => {
      const specifiConfiguration = await import(
        `pages/public/config/${upperCamelCaseToLowerCamelCase(
          publicView.name
        )}`
      )
      const path = specifiConfiguration.default.path || publicView.path

      routes[path] = route(
        {
          ...specifiConfiguration.default,
          title: publicView.name,
          getView: (): Promise<object> => import(
            `pages/public/${publicView.name}.${publicView.extension}`
          ),
        }
      )
    },
  )

  return { ...routes, }
}
