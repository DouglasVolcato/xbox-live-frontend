import { GetProfileInfoUseCase } from "../../data/usecases/profile/getProfileInfoUseCase";
import { UpdateProfileUseCase } from "../../data/usecases/profile/updateProfile-usecase";
import { GetUserInfoUseCase } from "../../data/usecases/user/getUserInfo-usecase";
import { UpdateUserUseCase } from "../../data/usecases/user/updateUser-usecase";
import { ControllerInterface } from "../abstract/controller.interface";
import { LoggedUserPage } from "../pages/loggedUser-page";

export class LoggedUserController implements ControllerInterface {
  private readonly loggedUserPage: LoggedUserPage;
  private readonly getUserInfoUseCase: GetUserInfoUseCase;
  private readonly getProfileInfoUseCase: GetProfileInfoUseCase;
  private readonly updateUserUseCase: UpdateUserUseCase;
  private readonly updateProfileUseCase: UpdateProfileUseCase;

  constructor(
    loggedUserPage: LoggedUserPage,
    getUserInfoUseCase: GetUserInfoUseCase,
    getProfileInfoUseCase: GetProfileInfoUseCase,
    updateUserUseCase: UpdateUserUseCase,
    updateProfileUseCase: UpdateProfileUseCase
  ) {
    this.loggedUserPage = loggedUserPage;
    this.getUserInfoUseCase = getUserInfoUseCase;
    this.getProfileInfoUseCase = getProfileInfoUseCase;
    this.updateUserUseCase = updateUserUseCase;
    this.updateProfileUseCase = updateProfileUseCase;
  }

  public renderPage(): string {
    return this.loggedUserPage.render();
  }

  public getUserInfo(): void {
    this.getUserInfoUseCase.execute();
  }

  public getProfileInfo(): void {
    this.getProfileInfoUseCase.execute();
  }

  public updateUser(navigateCallbackFunction: () => void): void {
    this.updateUserUseCase.execute(navigateCallbackFunction);
  }

  public updateProfile(navigateCallbackFunction: () => void): void {
    this.updateProfileUseCase.execute(navigateCallbackFunction);
  }
}
