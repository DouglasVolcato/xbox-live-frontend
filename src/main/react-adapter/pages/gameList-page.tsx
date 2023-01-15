import { makeGameListPageFactory } from "../../factories/pages/gameList-page-factory";
import { HtmlComponent } from "../helpers/html-component-helper";

export function GameList() {
  const gameList = makeGameListPageFactory();
  return <HtmlComponent component={gameList.render()} />;
}
