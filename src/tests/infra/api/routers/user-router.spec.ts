import { HttpRequestAdapterInterface } from "../../../../helpers/adapters/abstract/httpRequest-adapter-interface";
import { ApiConnectionInterface } from "../../../../infra/api/connection/abstract/apiConnection-abstract";
import { UserRouterInterface } from "../../../../infra/api/routers/abstract/user-router-interface";
import { UserRouter } from "../../../../infra/api/routers/user-router";
import { HttpRequestAdapterMock } from "../../../mocks/adapters/httpRequest-adapter-mock";
import { ApiConnectionMock } from "../../../mocks/api/apiConnection-mock";

type SutTypes = {
  httpRequestAdapter: HttpRequestAdapterInterface;
  apiConnection: ApiConnectionInterface;
  userRouter: UserRouterInterface;
};

function makeSut(): SutTypes {
  const httpRequestAdapter = new HttpRequestAdapterMock();
  const apiConnection = new ApiConnectionMock();
  const userRouter = new UserRouter(httpRequestAdapter, apiConnection);
  return { httpRequestAdapter, apiConnection, userRouter };
}

describe("UserRouter", () => {
  test("GetAll method should call apiConnection getLink method", () => {});
  test("GetAll method should call httpRequestAdapter get method", () => {});
  test("GetAll method should call httpRequestAdapter get method with correct values", () => {});
  test("GetAll method should throw if httpRequestAdapter get method throws", () => {});

  test("GetById method should call apiConnection getLink method", () => {});
  test("GetById method should call httpRequestAdapter post method", () => {});
  test("GetById method should call httpRequestAdapter post method with correct values", () => {});
  test("GetById method should throw if httpRequestAdapter post method throws", () => {});

  test("GetByEmail method should call apiConnection getLink method", () => {});
  test("GetByEmail method should call httpRequestAdapter post method", () => {});
  test("GetByEmail method should call httpRequestAdapter post method with correct values", () => {});
  test("GetByEmail method should throw if httpRequestAdapter post method throws", () => {});

  test("Delete method should call apiConnection getLink method", () => {});
  test("Delete method should call httpRequestAdapter delete method", () => {});
  test("Delete method should call httpRequestAdapter delete method with correct values", () => {});
  test("Delete method should throw if httpRequestAdapter delete method throws", () => {});

  test("Update method should call apiConnection getLink method", () => {});
  test("Update method should call httpRequestAdapter update method", () => {});
  test("Update method should call httpRequestAdapter update method with correct values", () => {});
  test("Update method should throw if httpRequestAdapter update method throws", () => {});
});
