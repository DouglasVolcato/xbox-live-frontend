import { GetGameInfoUseCase } from "../../../data/usecases/game/getGameInfo-usecase";
import { HttpRequestAdapter } from "../../../helpers/adapters/httpRequest-adapter";
import { GameIdHandler } from "../../../helpers/game/gameIdHandler-helper";
import { TokenHandler } from "../../../helpers/token/tokenHandler-helper";
import { GameRouter } from "../../../infra/api/routers/game-router";
import { GameViewController } from "../../../presentation/controllers/gameView-controller";
import { makeGameViewPageFactory } from "../pages/gameView-page-factory";

export function makeGameViewControllerFactory(): GameViewController {
  const gameViewPage = makeGameViewPageFactory();
  const httpRequestAdapter = new HttpRequestAdapter();
  const gameRouter = new GameRouter(httpRequestAdapter);
  const tokenHandler = new TokenHandler();
  const gameIdHandler = new GameIdHandler();
  const getGameInfoUseCase = new GetGameInfoUseCase(
    gameRouter,
    tokenHandler,
    gameIdHandler
  );
  return new GameViewController(gameViewPage, getGameInfoUseCase);
}
