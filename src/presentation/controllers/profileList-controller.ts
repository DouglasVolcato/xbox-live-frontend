import { GenerateProfileCardsUseCase } from "../../data/usecases/profile/generateProfileCards-usecase";
import { ControllerInterface } from "../abstract/controller.interface";
import { ProfileListPage } from "../pages/profileList-page";

export class ProfileListController implements ControllerInterface {
  private readonly profileListPage: ProfileListPage;
  private readonly generateProfileCardsUseCase: GenerateProfileCardsUseCase;

  constructor(
    profileListPage: ProfileListPage,
    generateProfileCardsUseCase: GenerateProfileCardsUseCase
  ) {
    this.profileListPage = profileListPage;
    this.generateProfileCardsUseCase = generateProfileCardsUseCase;
  }

  public renderPage(): string {
    return this.profileListPage.render();
  }

  public async updateProfileCards(
    navigateCallbackFunction: () => void
  ): Promise<void> {
    return await this.generateProfileCardsUseCase.execute(
      navigateCallbackFunction
    );
  }
}
