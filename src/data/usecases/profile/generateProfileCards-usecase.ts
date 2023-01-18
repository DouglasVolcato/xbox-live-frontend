import { TokenHandler } from "../../../helpers/token/tokenHandler-helper";
import { Service } from "../../abstract/service-interface";
import { ProfileRouter } from "../../../infra/api/routers/profile-router";
import { HtmlElement } from "../../../helpers/html/html-element";
import { Profile } from "../../../domain/profile";
import { Div } from "../../../presentation/components/div";
import { Image } from "../../../presentation/components/image";
import { Paragraph } from "../../../presentation/components/paragraph";
import { DivTypeEnum } from "../../../presentation/enums/div/div-type-enum";
import { FlexDirectionEnum } from "../../../presentation/enums/div/flex-direction-enum";
import { FlexJustificationEnum } from "../../../presentation/enums/div/flex-justification-enum";
import { ComponentComposer } from "../../../presentation/helpers/composers/component-composer";
import { ComponentInterface } from "../../../presentation/abstract/component-interface";

export class GenerateProfileCardsUseCase implements Service {
  private readonly profileRouter: ProfileRouter;
  private readonly tokenHandler: TokenHandler;

  constructor(profileRouter: ProfileRouter, tokenHandler: TokenHandler) {
    this.profileRouter = profileRouter;
    this.tokenHandler = tokenHandler;
  }

  public async execute(): Promise<void> {
    const authorization = this.tokenHandler.getAuthorization();
    const response = await this.profileRouter.getAll(authorization);
    const profiles = response.body.map((data) => this.getProfileCard(data));
    const html = new ComponentComposer(profiles).compose();
    const profileListDiv = new HtmlElement("profileList-flexBody");
    profileListDiv.insertHtml(html, "afterbegin");
  }

  private getProfileCard(profile: Profile): ComponentInterface {
    const profileImage = new Image(
      "profile image",
      profile.imageUrl,
      "profileList-profiles-profileDiv-image",
      ["profileList-image"]
    );
    const profileName = new Paragraph(
      profile.title,
      "profileList-profiles-profileDiv-profileName",
      ["profileList-name"]
    );
    return new Div(
      DivTypeEnum.DIV,
      FlexDirectionEnum.COLUMN,
      FlexJustificationEnum.EVENLY,
      [profileImage, profileName],
      "profileList-profiles-profileDiv",
      ["profileList-div"]
    );
  }
}
