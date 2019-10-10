import { mount, Matcher, } from 'navi'

import getPublicViews from 'config/routes/publicRoutes'
import getPrivateViews from 'config/routes/privateRoutes'

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
