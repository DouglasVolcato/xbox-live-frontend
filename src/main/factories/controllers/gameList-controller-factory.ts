import { SetGameListUseCase } from "../../../data/usecases/game/setGameList-usecase";
import { HttpRequestAdapter } from "../../../helpers/adapters/httpRequest-adapter";
import { GameIdHandler } from "../../../helpers/game/gameIdHandler-helper";
import { TokenHandler } from "../../../helpers/token/tokenHandler-helper";
import { GameRouter } from "../../../infra/api/routers/game-router";
import { GameListController } from "../../../presentation/controllers/gameList-controller";
import { makeGameListPageFactory } from "../pages/gameList-page-factory";

export function makeGameListControllerFactory(): GameListController {
  const gameListPage = makeGameListPageFactory();
  const httpRequestAdapter = new HttpRequestAdapter();
  const gameRouter = new GameRouter(httpRequestAdapter);
  const tokenHandler = new TokenHandler();
  const gameIdHandler = new GameIdHandler();
  const setGameListUseCase = new SetGameListUseCase(
    gameRouter,
    tokenHandler,
    gameIdHandler
  );
  return new GameListController(gameListPage, setGameListUseCase);
}
