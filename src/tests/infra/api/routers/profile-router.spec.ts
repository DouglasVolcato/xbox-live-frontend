import { HttpRequestAdapterInterface } from "../../../../helpers/adapters/abstract/httpRequest-adapter-interface";
import { ApiConnectionInterface } from "../../../../infra/api/connection/abstract/apiConnection-abstract";
import { ProfileRouterInterface } from "../../../../infra/api/routers/abstract/profile-router-interface";
import { ProfileRouter } from "../../../../infra/api/routers/profile-router";
import { HttpRequestAdapterMock } from "../../../mocks/adapters/httpRequest-adapter-mock";
import { ApiConnectionMock } from "../../../mocks/api/apiConnection-mock";

type SutTypes = {
  httpRequestAdapter: HttpRequestAdapterInterface;
  apiConnection: ApiConnectionInterface;
  profileRouter: ProfileRouterInterface;
};

function makeSut(): SutTypes {
  const httpRequestAdapter = new HttpRequestAdapterMock();
  const apiConnection = new ApiConnectionMock();
  const profileRouter = new ProfileRouter(httpRequestAdapter, apiConnection);
  return { httpRequestAdapter, apiConnection, profileRouter };
}

describe("ProfileRouter", () => {
  test("Create method should call apiConnection getLink method", () => {});
  test("Create method should call httpRequestAdapter post method", () => {});
  test("Create method should call httpRequestAdapter post method with correct values", () => {});
  test("Create method should throw if httpRequestAdapter post method throws", () => {});

  test("GetAll method should call apiConnection getLink method", () => {});
  test("GetAll method should call httpRequestAdapter get method", () => {});
  test("GetAll method should call httpRequestAdapter get method with correct values", () => {});
  test("GetAll method should throw if httpRequestAdapter get method throws", () => {});

  test("GetById method should call apiConnection getLink method", () => {});
  test("GetById method should call httpRequestAdapter post method", () => {});
  test("GetById method should call httpRequestAdapter post method with correct values", () => {});
  test("GetById method should throw if httpRequestAdapter post method throws", () => {});

  test("Delete method should call apiConnection getLink method", () => {});
  test("Delete method should call httpRequestAdapter delete method", () => {});
  test("Delete method should call httpRequestAdapter delete method with correct values", () => {});
  test("Delete method should throw if httpRequestAdapter delete method throws", () => {});

  test("Update method should call apiConnection getLink method", () => {});
  test("Update method should call httpRequestAdapter patch method", () => {});
  test("Update method should call httpRequestAdapter patch method with correct values", () => {});
  test("Update method should throw if httpRequestAdapter patch method throws", () => {});

  test("AddGames method should call apiConnection getLink method", () => {});
  test("AddGames method should call httpRequestAdapter patch method", () => {});
  test("AddGames method should call httpRequestAdapter patch method with correct values", () => {});
  test("AddGames method should throw if httpRequestAdapter patch method throws", () => {});

  test("RemoveGames method should call apiConnection getLink method", () => {});
  test("RemoveGames method should call httpRequestAdapter patch method", () => {});
  test("RemoveGames method should call httpRequestAdapter patch method with correct values", () => {});
  test("RemoveGames method should throw if httpRequestAdapter patch method throws", () => {});
});
