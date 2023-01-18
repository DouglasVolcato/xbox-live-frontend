import { MakeLoginUseCase } from "../../../data/usecases/login/makeLogin-usecase";
import { AuthRouter } from "../../../infra/api/routers/auth-router";
import { TokenHandler } from "../../../helpers/token/tokenHandler-helper";
import { LoginController } from "../../../presentation/controllers/login-controller";
import { HttpRequestAdapter } from "../../../helpers/adapters/httpRequest-adapter";
import { makeLoginPage } from "../pages/login-page-factory";

export function makeLoginControllerFactory(): LoginController {
  const httpRequestAdapter = new HttpRequestAdapter();
  const tokenHandler = new TokenHandler();
  const authRouter = new AuthRouter(httpRequestAdapter);
  const makeLoginUseCase = new MakeLoginUseCase(authRouter, tokenHandler);
  const loginPage = makeLoginPage();
  return new LoginController(loginPage, makeLoginUseCase);
}
