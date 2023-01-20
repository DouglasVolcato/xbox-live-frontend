import { GenerateProfileCardsUseCase } from "../../../data/usecases/profile/generateProfileCards-usecase";
import { HttpRequestAdapter } from "../../../helpers/adapters/httpRequest-adapter";
import { ProfileHandler } from "../../../helpers/profile/profileHandler-helper";
import { TokenHandler } from "../../../helpers/token/tokenHandler-helper";
import { ProfileRouter } from "../../../infra/api/routers/profile-router";
import { ProfileListController } from "../../../presentation/controllers/profileList-controller";
import { makeProfileListPageFactory } from "../pages/profileList-page-factory";

export function makeProfileListControllerFactory(): ProfileListController {
  const httpRequestAdapter = new HttpRequestAdapter();
  const profileRouter = new ProfileRouter(httpRequestAdapter);
  const tokenHandler = new TokenHandler();
  const profileHandler = new ProfileHandler();
  const generateProfileCardsUseCase = new GenerateProfileCardsUseCase(
    profileRouter,
    tokenHandler,
    profileHandler
  );
  const profileListPage = makeProfileListPageFactory();
  return new ProfileListController(
    profileListPage,
    generateProfileCardsUseCase
  );
}
