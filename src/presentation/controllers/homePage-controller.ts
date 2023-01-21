import { GetLatestGameListUseCase } from "../../data/usecases/game/getLatestGameList-usecase";
import { ControllerInterface } from "../abstract/controller.interface";
import { HomePage } from "../pages/home-page";

export class HomePageController implements ControllerInterface {
  private readonly homePage: HomePage;
  private readonly getLatestGameListUseCase: GetLatestGameListUseCase;

  constructor(
    homePage: HomePage,
    getLatestGameListUseCase: GetLatestGameListUseCase
  ) {
    this.homePage = homePage;
    this.getLatestGameListUseCase = getLatestGameListUseCase;
  }

  public renderPage(): string {
    return this.homePage.render();
  }

  public async setGameList(
    navigateCallbackFunction: () => void
  ): Promise<void> {
    return await this.getLatestGameListUseCase.execute(
      navigateCallbackFunction
    );
  }
}
