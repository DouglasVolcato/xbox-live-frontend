import { SetGameListUseCase } from "../../data/usecases/game/setGameList-usecase";
import { ControllerInterface } from "../abstract/controller.interface";
import { GameListPage } from "../pages/gameList-page";

export class GameListController implements ControllerInterface {
  private readonly gameListPage: GameListPage;
  private readonly setGameListUseCase: SetGameListUseCase;

  constructor(
    gameListPage: GameListPage,
    setGameListUseCase: SetGameListUseCase
  ) {
    this.gameListPage = gameListPage;
    this.setGameListUseCase = setGameListUseCase;
  }

  public renderPage(): string {
    return this.gameListPage.render();
  }

  public async setGameList(
    navigateCallbackFunction: () => void
  ): Promise<void> {
    return await this.setGameListUseCase.execute(navigateCallbackFunction);
  }
}
