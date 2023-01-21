import { GetGameListUseCase } from "../../../data/usecases/game/getGameList-usecase";
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
  const getGameListUseCase = new GetGameListUseCase(
    gameRouter,
    tokenHandler,
    gameIdHandler
  );
  return new GameListController(gameListPage, getGameListUseCase);
}
