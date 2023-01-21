import { GetGameListUseCase } from "../../data/usecases/game/getGameList-usecase";
import { ControllerInterface } from "../abstract/controller.interface";
import { GameListPage } from "../pages/gameList-page";

export class GameListController implements ControllerInterface {
  private readonly gameListPage: GameListPage;
  private readonly getGameListUseCase: GetGameListUseCase;

  constructor(
    gameListPage: GameListPage,
    getGameListUseCase: GetGameListUseCase
  ) {
    this.gameListPage = gameListPage;
    this.getGameListUseCase = getGameListUseCase;
  }

  public renderPage(): string {
    return this.gameListPage.render();
  }

  public async setGameList(
    navigateCallbackFunction: () => void
  ): Promise<void> {
    return await this.getGameListUseCase.execute(navigateCallbackFunction);
  }
}
