import { makeGameViewPageFactory } from "../../factories/pages/gameView-page-factory";
import { HtmlComponent } from "../helpers/html-component-helper";

export function GameView() {
  const gameViewPage = makeGameViewPageFactory();
  return <HtmlComponent component={gameViewPage.render()} />;
}
