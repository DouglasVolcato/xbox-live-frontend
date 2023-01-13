import { useEffect } from "react";
import { makeGameListPageFactory } from "../../factories/pages/gameList-page-factory";
import { HtmlComponent } from "../helpers/html-component-helper";

export function GameList() {
  const gameList = makeGameListPageFactory();

  useEffect(() => {
    gameList.updateHours();
  }, []);

  return <HtmlComponent component={gameList.render()} />;
}
