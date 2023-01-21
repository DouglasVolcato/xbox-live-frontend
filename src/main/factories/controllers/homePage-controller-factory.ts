import { GetLatestGameListUseCase } from "../../../data/usecases/game/getLatestGameList-usecase";
import { HttpRequestAdapter } from "../../../helpers/adapters/httpRequest-adapter";
import { GameIdHandler } from "../../../helpers/game/gameIdHandler-helper";
import { TokenHandler } from "../../../helpers/token/tokenHandler-helper";
import { GameRouter } from "../../../infra/api/routers/game-router";
import { HomePageController } from "../../../presentation/controllers/homePage-controller";
import { makeHomePageFactory } from "../pages/home-page-factory";

export function makeHomePageControllerFactory(): HomePageController {
  const httpRequestAdapter = new HttpRequestAdapter();
  const tokenHandler = new TokenHandler();
  const gameIdHandler = new GameIdHandler();
  const gameRouter = new GameRouter(httpRequestAdapter);
  const getLatestGameListUseCase = new GetLatestGameListUseCase(
    gameRouter,
    tokenHandler,
    gameIdHandler
  );
  const homePage = makeHomePageFactory();
  return new HomePageController(homePage, getLatestGameListUseCase);
}
