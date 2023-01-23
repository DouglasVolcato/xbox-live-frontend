import { GetGameListUseCase } from "../../data/usecases/game/getGameList-usecase";
import { GetProfileHeaderUseCase } from "../../data/usecases/profile/getProfileHeader-usecase";
import { ControllerInterface } from "../abstract/controller.interface";
import { GameListPage } from "../pages/gameList-page";

export class GameListController implements ControllerInterface {
  private readonly gameListPage: GameListPage;
  private readonly getGameListUseCase: GetGameListUseCase;
  private readonly getProfileHeaderUseCase: GetProfileHeaderUseCase;

  constructor(
    gameListPage: GameListPage,
    getGameListUseCase: GetGameListUseCase,
    getProfileHeaderUseCase: GetProfileHeaderUseCase
  ) {
    this.gameListPage = gameListPage;
    this.getGameListUseCase = getGameListUseCase;
    this.getProfileHeaderUseCase = getProfileHeaderUseCase;
  }

  public renderPage(): string {
    return this.gameListPage.render();
  }

  public async setGameList(
    navigateCallbackFunction: () => void
  ): Promise<void> {
    return await this.getGameListUseCase.execute(navigateCallbackFunction);
  }

  public updateHeader(): void {
    this.getProfileHeaderUseCase.execute();
  }
}
