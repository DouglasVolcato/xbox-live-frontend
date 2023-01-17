import { HtmlElement } from "../../../helpers/html/html-element";
import { AuthRouter } from "../../../infra/api/routers/auth-router";
import { Service } from "../../abstract/service-interface";

export class MakeLoginUseCase implements Service {
  private readonly authRouter: AuthRouter;

  constructor(authRouter: AuthRouter) {
    this.authRouter = authRouter;
  }

  execute(navigateCallbackFunction = () => {}): void {
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
        navigateCallbackFunction();
      }
    });
  }
}
