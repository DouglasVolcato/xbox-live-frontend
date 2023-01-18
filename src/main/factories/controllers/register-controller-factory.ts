import { RegisterUserUseCase } from "../../../data/usecases/register/registerUser-usecase";
import { UserRouter } from "../../../infra/api/routers/user-router";
import { TokenHandler } from "../../../infra/helpers/tokenHandler-helper";
import { RegisterController } from "../../../presentation/controllers/register-controller";
import { HttpRequestAdapter } from "../../adapters/httpRequest-adapter";
import { makeRegisterPageFactory } from "../pages/register-page-factory";

export function makeRegisterControllerFactory(): RegisterController {
  const tokenHandler = new TokenHandler();
  const httpRequestAdapter = new HttpRequestAdapter();
  const userRouter = new UserRouter(tokenHandler, httpRequestAdapter);
  const registerUserUseCase = new RegisterUserUseCase(userRouter);
  const registerPage = makeRegisterPageFactory();
  return new RegisterController(registerPage, registerUserUseCase);
}
