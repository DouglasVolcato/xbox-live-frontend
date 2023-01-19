import { CreateProfileUseCase } from "../../data/usecases/profile/createProfile-usecase";
import { ControllerInterface } from "../abstract/controller.interface";
import { ProfileCreationPage } from "../pages/profileCreation-page";

export class ProfileCreationController implements ControllerInterface {
  private readonly profileCreationPage: ProfileCreationPage;
  private readonly createProfileseCase: CreateProfileUseCase;

  constructor(
    profileCreation: ProfileCreationPage,
    createProfileseCase: CreateProfileUseCase
  ) {
    this.profileCreationPage = profileCreation;
    this.createProfileseCase = createProfileseCase;
  }

  public renderPage(): string {
    return this.profileCreationPage.render();
  }

  public createProfile(navigateCallbackFunction: () => void): void {
    return this.createProfileseCase.execute(navigateCallbackFunction);
  }
}
