import { GetFavoriteGameListUseCase } from "../../data/usecases/game/getFavoriteGameList-usecase";
import { ControllerInterface } from "../abstract/controller.interface";
import { FavoriteGamesPage } from "../pages/favoriteGames-page";

export class FavoriteGamesController implements ControllerInterface {
  private readonly favoriteGamesPage: FavoriteGamesPage;
  private readonly getFavoriteGamesListUseCase: GetFavoriteGameListUseCase;

  constructor(
    favoriteGamesPage: FavoriteGamesPage,
    getFavoriteGamesListUseCase: GetFavoriteGameListUseCase
  ) {
    this.favoriteGamesPage = favoriteGamesPage;
    this.getFavoriteGamesListUseCase = getFavoriteGamesListUseCase;
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
}
