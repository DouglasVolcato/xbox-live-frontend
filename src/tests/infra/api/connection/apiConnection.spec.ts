import { ApiConnection } from "../../../../infra/api/connection/apiConnection";

function makeFakeLink(): string {
  return "www.fakeLink.com";
}

type SutTypes = {
  apiConnection: ApiConnection;
};

function makeSut(link?: string): SutTypes {
  const apiConnection = new ApiConnection(link);
  return { apiConnection };
}

describe("ApiConnection", () => {
  test("Should be able to receive a link and return this link with GetLink method", () => {
    const link = makeFakeLink();
    const { apiConnection } = makeSut(link);
    const apiLik = apiConnection.getLink();
    expect(apiLik).toBe(link);
  });
});
