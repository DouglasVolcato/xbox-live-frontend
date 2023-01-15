import axios from "axios";

export class HttpRequestAdapter {
  public async post(
    url: string,
    body: any,
    authorizationHeader = ""
  ): Promise<any> {
    return axios.post(url, body, {
      headers: {
        Authorization: authorizationHeader,
      },
    });
  }

  public async patch(
    url: string,
    body: any,
    authorizationHeader = ""
  ): Promise<any> {
    return axios.patch(url, body, {
      headers: {
        Authorization: authorizationHeader,
      },
    });
  }

  public async get(url: string, authorizationHeader = ""): Promise<any> {
    return axios.get(url, {
      headers: {
        Authorization: authorizationHeader,
      },
    });
  }

  public async delete(url: string, authorizationHeader = ""): Promise<any> {
    return axios.delete(url, {
      headers: {
        Authorization: authorizationHeader,
      },
    });
  }
}
