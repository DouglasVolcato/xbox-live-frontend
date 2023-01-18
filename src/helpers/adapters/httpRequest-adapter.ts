import axios from "axios";

export class HttpRequestAdapter {
  public async post(
    url: string,
    body: any,
    authorizationHeader = ""
  ): Promise<any> {
    const response = await axios.post(url, body, {
      headers: {
        Authorization: authorizationHeader,
      },
    });
    return response.data;
  }

  public async patch(
    url: string,
    body: any,
    authorizationHeader = ""
  ): Promise<any> {
    const response = await axios.patch(url, body, {
      headers: {
        Authorization: authorizationHeader,
      },
    });
    return response.data;
  }

  public async get(url: string, authorizationHeader = ""): Promise<any> {
    const response = await axios.get(url, {
      headers: {
        Authorization: authorizationHeader,
      },
    });
    return response.data;
  }

  public async delete(url: string, authorizationHeader = ""): Promise<any> {
    const response = await axios.delete(url, {
      headers: {
        Authorization: authorizationHeader,
      },
    });
    return response.data;
  }
}
