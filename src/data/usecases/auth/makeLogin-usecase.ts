import { HtmlElement } from "../../../helpers/html/html-element";
import { AuthRouter } from "../../../infra/api/routers/auth-router";
import { TokenHandler } from "../../../helpers/token/tokenHandler-helper";
import { Service } from "../../abstract/service-interface";
import { UserHandler } from "../../../helpers/user/userHandler-helper";

export class MakeLoginUseCase implements Service {
  private readonly authRouter: AuthRouter;
  private readonly tokenHandler: TokenHandler;
  private readonly userHandler: UserHandler;

  constructor(
    authRouter: AuthRouter,
    tokenHandler: TokenHandler,
    userHandler: UserHandler
  ) {
    this.authRouter = authRouter;
    this.tokenHandler = tokenHandler;
    this.userHandler = userHandler;
  }

  public execute(navigateCallbackFunction = () => {}): void {
    const loginButton = new HtmlElement("loginForm-buttonsDiv-loginButon");
    const emailInput = new HtmlElement("loginForm-emailInput");
    const passwordInput = new HtmlElement("loginForm-passwordInput");

    loginButton.addEventListener("click", async () => {
      const email = emailInput.getValue();
      const password = passwordInput.getValue();
      const response = await this.authRouter.login({
        email,
        password,
      });
      if (response.message) {
        alert(response.message);
      }
      if (response.statusCode === 200) {
        const token = response.body.token;
        this.tokenHandler.storeToken(token);
        this.userHandler.storeUser(email);
        navigateCallbackFunction();
      } else {
        this.tokenHandler.removeToken();
      }
    });
  }
}
