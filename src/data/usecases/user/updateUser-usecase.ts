import { HtmlElement } from "../../../helpers/html/html-element";
import { TokenHandler } from "../../../helpers/token/tokenHandler-helper";
import { Service } from "../../abstract/service-interface";
import { UserRouter } from "../../../infra/api/routers/user-router";
import { UserHandler } from "../../../helpers/user/userHandler-helper";

export class UpdateUserUseCase implements Service {
  private readonly userRouter: UserRouter;
  private readonly tokenHandler: TokenHandler;
  private readonly userHandler: UserHandler;

  constructor(
    userRouter: UserRouter,
    tokenHandler: TokenHandler,
    userHandler: UserHandler
  ) {
    this.userRouter = userRouter;
    this.tokenHandler = tokenHandler;
    this.userHandler = userHandler;
  }

  public execute(navigateCallbackFunction = () => {}): void {
    const updateButton = new HtmlElement("userAccountForm-buttonsDiv-updateButton");
    const username = new HtmlElement("userAccountForm-nameInput");
    const useremail = new HtmlElement("userAccountForm-emailInput");
    const userPassword = new HtmlElement("userAccountForm-passwordInput");
    const userCpf = new HtmlElement("userAccountForm-cpfInput");
    const authorization = this.tokenHandler.getAuthorization();

    updateButton.addEventListener("click", async () => {
      const userId = await this.getUserId();
      const password = userPassword.getValue();

      const updatedBody: any = {};
      updatedBody.name = username.getValue();
      updatedBody.email = useremail.getValue();
      updatedBody.cpf = userCpf.getValue();
      if (password && password !== "") {
        updatedBody.password = password;
      }

      await this.userRouter
        .update(userId, updatedBody, authorization)
        .then((response) => {
          if (response.message) {
            alert(response.message);
          }
          if (response.statusCode === 200) {
            navigateCallbackFunction();
          }
        });
    });
  }

  private async getUserId(): Promise<string> {
    const userEmail = this.userHandler.getUser();
    const authorization = this.tokenHandler.getAuthorization();
    const response = await this.userRouter.getByEmail(userEmail, authorization);
    return response.body.id;
  }
}
