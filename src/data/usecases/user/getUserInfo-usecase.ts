import { HtmlElement } from "../../../helpers/html/html-element";
import { TokenHandler } from "../../../helpers/token/tokenHandler-helper";
import { UserHandler } from "../../../helpers/user/userHandler-helper";
import { UserRouter } from "../../../infra/api/routers/user-router";
import { Service } from "../../abstract/service-interface";

export class GetUserInfoUseCase implements Service {
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

  public async execute(): Promise<void> {
    const authorization = this.tokenHandler.getAuthorization();
    const userEmail = this.userHandler.getUser();
    const name = new HtmlElement("userAccountForm-nameInput");
    const email = new HtmlElement("userAccountForm-emailInput");
    const cpf = new HtmlElement("userAccountForm-cpfInput");

    this.userRouter.getByEmail(userEmail, authorization).then((response) => {
      name.setValue(response.body.name);
      email.setValue(response.body.email);
      cpf.setValue(response.body.cpf);
    });
  }
}
