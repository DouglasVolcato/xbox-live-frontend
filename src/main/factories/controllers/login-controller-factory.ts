import { MakeLoginUseCase } from "../../../data/usecases/login/makeLogin-usecase";
import { AuthRouter } from "../../../infra/api/routers/auth-router";
import { LoginController } from "../../../presentation/controllers/login-controller";
import { HttpRequestAdapter } from "../../adapters/httpRequest-adapter";
import { makeLoginPage } from "../pages/login-page-factory";

export function makeLoginControllerFactory(): LoginController {
  const httpRequestAdapter = new HttpRequestAdapter();
  const authRouter = new AuthRouter(httpRequestAdapter);
  const makeLoginUseCase = new MakeLoginUseCase(authRouter);
  const loginPage = makeLoginPage();
  return new LoginController(loginPage, makeLoginUseCase);
}
