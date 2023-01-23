import { useEffect } from "react";
import { makeFavoriteGamesControllerFactory } from "../../factories/controllers/favoriteGames-controller-factory";
import { HtmlComponent } from "../helpers/html-component-helper";

export function FavoriteGames() {
  const favoriteGamesController = makeFavoriteGamesControllerFactory();

  function test() {
    alert("Game selected!");
  }

  useEffect(() => {
    favoriteGamesController.setGameList(test);
    favoriteGamesController.updateHeader();
  });

  return <HtmlComponent component={favoriteGamesController.renderPage()} />;
}
