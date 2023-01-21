import { useEffect } from "react";
import { makeGameListControllerFactory } from "../../factories/controllers/gameList-controller-factory";
import { HtmlComponent } from "../helpers/html-component-helper";

export function GameList() {
  const gameListController = makeGameListControllerFactory();

  function test() {
    alert("Game selected!");
  }

  useEffect(() => {
    gameListController.setGameList(test);
  });

  return <HtmlComponent component={gameListController.renderPage()} />;
}
