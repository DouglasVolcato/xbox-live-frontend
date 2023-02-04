import { ApiConnection } from "../../../../infra/api/connection/apiConnection";
import { apiLink } from "../../../../infra/api/connection/apiLink";

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
    const apiLink = apiConnection.getLink();
    expect(apiLink).toBe(link);
  });

  test("GetLink method should return main api link if no link is given during class intance", () => {
    const { apiConnection } = makeSut();
    const limk = apiConnection.getLink();
    expect(limk).toBe(apiLink);
  });
});
