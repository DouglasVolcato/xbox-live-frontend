import { GetFavoriteGameListUseCase } from "../../data/usecases/game/getFavoriteGameList-usecase";
import { GetProfileHeaderUseCase } from "../../data/usecases/profile/getProfileHeader-usecase";
import { ControllerInterface } from "../abstract/controller.interface";
import { FavoriteGamesPage } from "../pages/favoriteGames-page";

export class FavoriteGamesController implements ControllerInterface {
  private readonly favoriteGamesPage: FavoriteGamesPage;
  private readonly getFavoriteGamesListUseCase: GetFavoriteGameListUseCase;
  private readonly getProfileHeaderUseCase: GetProfileHeaderUseCase;

  constructor(
    favoriteGamesPage: FavoriteGamesPage,
    getFavoriteGamesListUseCase: GetFavoriteGameListUseCase,
    getProfileHeaderUseCase: GetProfileHeaderUseCase
  ) {
    this.favoriteGamesPage = favoriteGamesPage;
    this.getFavoriteGamesListUseCase = getFavoriteGamesListUseCase;
    this.getProfileHeaderUseCase = getProfileHeaderUseCase;
  }

  public renderPage(): string {
    return this.favoriteGamesPage.render();
  }

  public async setGameList(
    navigateCallbackFunction: () => void
  ): Promise<void> {
    return await this.getFavoriteGamesListUseCase.execute(
      navigateCallbackFunction
    );
  }

  public updateHeader(): void {
    this.getProfileHeaderUseCase.execute();
  }
}
