import { FavoriteGameUseCase } from "../../data/usecases/game/favoriteGame-usecase";
import { GetGameInfoUseCase } from "../../data/usecases/game/getGameInfo-usecase";
import { ControllerInterface } from "../abstract/controller.interface";
import { GameViewPage } from "../pages/gameView-page";

export class GameViewController implements ControllerInterface {
  private readonly gameViewPage: GameViewPage;
  private readonly getGameInfoUseCase: GetGameInfoUseCase;
  private readonly favoriteGameUseCase: FavoriteGameUseCase;

  constructor(
    gameViewPage: GameViewPage,
    getGameInfoUseCase: GetGameInfoUseCase,
    favoriteGameUseCase: FavoriteGameUseCase
  ) {
    this.gameViewPage = gameViewPage;
    this.getGameInfoUseCase = getGameInfoUseCase;
    this.favoriteGameUseCase = favoriteGameUseCase;
  }

  public renderPage(): string {
    return this.gameViewPage.render();
  }

  public async setGameInfo(): Promise<void> {
    return await this.getGameInfoUseCase.execute();
  }

  public async favoriteGame(): Promise<void> {
    return await this.favoriteGameUseCase.execute();
  }
}
