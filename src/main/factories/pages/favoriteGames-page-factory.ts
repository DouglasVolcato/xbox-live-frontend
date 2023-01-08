import { Title } from "../../../presentation/components/title";
import { FavoriteGamesPage } from "../../../presentation/pages/favoriteGames-page";
import { makeGameListFactory } from "../components/gameList-component-factory";
import { makeHeaderFactory } from "../components/header-component-factory";
import { makeMenuFactory } from "../components/menu-component-factory";

export function makeFavoriteGamesPageFactory(): FavoriteGamesPage {
  const header = makeHeaderFactory();
  const pageTitle = new Title("Favorite Games", "favoriteGames-title");
  const menuDiv = makeMenuFactory();
  const gamesDiv = makeGameListFactory();

  return new FavoriteGamesPage(header, menuDiv, pageTitle, gamesDiv);
}
