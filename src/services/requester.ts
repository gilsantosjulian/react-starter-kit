import axios from 'axios';

class Requester {
  public get(
    url: string
  ): Promise<object> {
    return axios(
      {
        url,
        method: 'GET',
      }
    );
  }

  public post(
    url: string, data: object
  ): Promise<object> {
    return axios(
      {
        url,
        data,
        method: 'POST',
      }
    );
  }
}

export default new Requester();
