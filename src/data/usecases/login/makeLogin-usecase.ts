import { HtmlElement } from "../../../helpers/html/html-element";
import { AuthRouter } from "../../../infra/api/routers/auth-router";
import { TokenHandler } from "../../../helpers/token/tokenHandler-helper";
import { Service } from "../../abstract/service-interface";

export class MakeLoginUseCase implements Service {
  private readonly authRouter: AuthRouter;
  private readonly tokenHandler: TokenHandler;

  constructor(authRouter: AuthRouter, tokenHandler: TokenHandler) {
    this.authRouter = authRouter;
    this.tokenHandler = tokenHandler;
  }

  public execute(navigateCallbackFunction = () => {}): void {
    const loginButton = new HtmlElement("loginForm-buttonsDiv-loginButon");
    const emailInput = new HtmlElement("loginForm-emailInput");
    const passwordInput = new HtmlElement("loginForm-passwordInput");

    loginButton.addEventListener("click", async () => {
      navigateCallbackFunction();
      const response = await this.authRouter.login({
        email: emailInput.getValue(),
        password: passwordInput.getValue(),
      });
      if (response.body.token) {
        this.tokenHandler.storeToken(response.body.token);
        navigateCallbackFunction();
      }
    });
  }
}
