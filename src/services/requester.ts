import axios from 'axios'

import Response from 'types/response'

class Requester {
  public get(
    url: string
  ): Promise<Response> {
    return axios(
      {
        url,
        method: 'GET',
      }
    )
  }

  public post(
    url: string, data: object
  ): Promise<Response> {
    return axios(
      {
        url,
        data,
        method: 'POST',
      }
    )
  }
}

export default new Requester()
