import { GetGameInfoUseCase } from "../../data/usecases/game/getGameInfo-usecase";
import { ControllerInterface } from "../abstract/controller.interface";
import { GameViewPage } from "../pages/gameView-page";

export class GameViewController implements ControllerInterface {
  private readonly gameViewPage: GameViewPage;
  private readonly getGameInfoUseCase: GetGameInfoUseCase;

  constructor(
    gameViewPage: GameViewPage,
    getGameInfoUseCase: GetGameInfoUseCase
  ) {
    this.gameViewPage = gameViewPage;
    this.getGameInfoUseCase = getGameInfoUseCase;
  }

  public renderPage(): string {
    return this.gameViewPage.render();
  }

  public async setGameInfo(): Promise<void> {
    return await this.getGameInfoUseCase.execute();
  }
}
