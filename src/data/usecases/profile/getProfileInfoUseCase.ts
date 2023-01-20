import { HtmlElement } from "../../../helpers/html/html-element";
import { ProfileHandler } from "../../../helpers/profile/profileHandler-helper";
import { TokenHandler } from "../../../helpers/token/tokenHandler-helper";
import { ProfileRouter } from "../../../infra/api/routers/profile-router";
import { Service } from "../../abstract/service-interface";

export class GetProfileInfoUseCase implements Service {
  private readonly profileRouter: ProfileRouter;
  private readonly tokenHandler: TokenHandler;
  private readonly profileHandler: ProfileHandler;

  constructor(
    profileRouter: ProfileRouter,
    tokenHandler: TokenHandler,
    profileHandler: ProfileHandler
  ) {
    this.profileRouter = profileRouter;
    this.tokenHandler = tokenHandler;
    this.profileHandler = profileHandler;
  }

  public async execute(): Promise<void> {
    const authorization = this.tokenHandler.getAuthorization();
    const profileId = this.profileHandler.getProfile();
    const profileTitle = new HtmlElement("profileForm-nameInput");
    const profileImageUrl = new HtmlElement("profileForm-imageInput");
    const profileImage = new HtmlElement("profileForm-image");

    this.profileRouter.getById(profileId, authorization).then((response) => {
      profileTitle.setValue(response.body.title);
      profileImageUrl.setValue(response.body.imageUrl);
      profileImage.setSrc(response.body.imageUrl);
    });
  }
}
