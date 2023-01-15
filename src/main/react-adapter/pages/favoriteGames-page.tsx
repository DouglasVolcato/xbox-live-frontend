import { makeFavoriteGamesPageFactory } from "../../factories/pages/favoriteGames-page-factory";
import { HtmlComponent } from "../helpers/html-component-helper";

export function FavoriteGames() {
  const favoriteGames = makeFavoriteGamesPageFactory();
  return <HtmlComponent component={favoriteGames.render()} />;
}
