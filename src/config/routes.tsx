import { mount, Matcher, } from 'navi'

import getPublicViews from 'config/publicRoutes'
import getPrivateViews from 'config/privateRoutes'

const getViews = async (): Promise<object> => {
  const publicViews = await getPublicViews()
  const privateViews = await getPrivateViews()

  return {
    ...privateViews,
    ...publicViews,
  }
}

export default async (): Promise<Matcher<{}, {}>> => mount(
  await getViews()
)
