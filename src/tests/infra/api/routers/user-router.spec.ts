import { HttpRequestAdapterInterface } from "../../../../helpers/adapters/abstract/httpRequest-adapter-interface";
import { ApiConnectionInterface } from "../../../../infra/api/connection/abstract/apiConnection-abstract";
import { UserRouterInterface } from "../../../../infra/api/routers/abstract/user-router-interface";
import { UserRouter } from "../../../../infra/api/routers/user-router";
import { HttpRequestAdapterMock } from "../../../mocks/adapters/httpRequest-adapter-mock";
import { ApiConnectionMock } from "../../../mocks/api/apiConnection-mock";
import { makeFakeToken } from "../../../mocks/fakers/token-fake";
import { makeFakeUser } from "../../../mocks/fakers/user-fake";

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
  test("Create method should call apiConnection getLink method", () => {
    const { apiConnection, userRouter } = makeSut();
    const user = makeFakeUser();
    const apiConnectionSpy = jest.spyOn(apiConnection, "getLink");
    userRouter.create(user);
    expect(apiConnectionSpy).toHaveBeenCalled();
  });

  // test("Create method should call httpRequestAdapter post method", () => {});
  // test("Create method should call httpRequestAdapter post method with correct values", () => {});
  // test("Create method should throw if httpRequestAdapter post method throws", () => {});

  test("GetAll method should call apiConnection getLink method", () => {
    const { apiConnection, userRouter } = makeSut();
    const token = makeFakeToken();
    const apiConnectionSpy = jest.spyOn(apiConnection, "getLink");
    userRouter.getAll(token);
    expect(apiConnectionSpy).toHaveBeenCalled();
  });
  // test("GetAll method should call httpRequestAdapter get method", () => {});
  // test("GetAll method should call httpRequestAdapter get method with correct values", () => {});
  // test("GetAll method should throw if httpRequestAdapter get method throws", () => {});

  test("GetById method should call apiConnection getLink method", () => {
    const { apiConnection, userRouter } = makeSut();
    const userId = makeFakeUser().id;
    const token = makeFakeToken();
    const apiConnectionSpy = jest.spyOn(apiConnection, "getLink");
    userRouter.getById(userId, token);
    expect(apiConnectionSpy).toHaveBeenCalled();
  });
  // test("GetById method should call httpRequestAdapter post method", () => {});
  // test("GetById method should call httpRequestAdapter post method with correct values", () => {});
  // test("GetById method should throw if httpRequestAdapter post method throws", () => {});

  test("GetByEmail method should call apiConnection getLink method", () => {
    const { apiConnection, userRouter } = makeSut();
    const userEmail = makeFakeUser().email;
    const token = makeFakeToken();
    const apiConnectionSpy = jest.spyOn(apiConnection, "getLink");
    userRouter.getByEmail(userEmail, token);
    expect(apiConnectionSpy).toHaveBeenCalled();
  });
  // test("GetByEmail method should call httpRequestAdapter post method", () => {});
  // test("GetByEmail method should call httpRequestAdapter post method with correct values", () => {});
  // test("GetByEmail method should throw if httpRequestAdapter post method throws", () => {});

  test("Delete method should call apiConnection getLink method", () => {
    const { apiConnection, userRouter } = makeSut();
    const userId = makeFakeUser().id;
    const token = makeFakeToken();
    const apiConnectionSpy = jest.spyOn(apiConnection, "getLink");
    userRouter.delete(userId, token);
    expect(apiConnectionSpy).toHaveBeenCalled();
  });
  // test("Delete method should call httpRequestAdapter delete method", () => {});
  // test("Delete method should call httpRequestAdapter delete method with correct values", () => {});
  // test("Delete method should throw if httpRequestAdapter delete method throws", () => {});

  test("Update method should call apiConnection getLink method", () => {
    const { apiConnection, userRouter } = makeSut();
    const userData = makeFakeUser();
    const userId = userData.id;
    const token = makeFakeToken();
    const apiConnectionSpy = jest.spyOn(apiConnection, "getLink");
    userRouter.update(userId, userData, token);
    expect(apiConnectionSpy).toHaveBeenCalled();
  });
  // test("Update method should call httpRequestAdapter patch method", () => {});
  // test("Update method should call httpRequestAdapter patch method with correct values", () => {});
  // test("Update method should throw if httpRequestAdapter patch method throws", () => {});
});
