import { useEffect } from "react";
import { makeGamesAdminControllerFactory } from "../../factories/controllers/gamesAdmin-controller-factory";
import { HtmlComponent } from "../helpers/html-component-helper";

export function GamesAdmin() {
  const gamesAdminPage = makeGamesAdminControllerFactory();

  function gamePageNavitation() {
    alert("Game selected");
  }

  useEffect(() => {
    gamesAdminPage.setGameList(gamePageNavitation);
  });

  return <HtmlComponent component={gamesAdminPage.renderPage()} />;
}
