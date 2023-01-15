import { makeGameEditionAdminPageFactory } from "../../factories/pages/gameEditionAdmin-page-factory";
import { HtmlComponent } from "../helpers/html-component-helper";

export function GameEditionAdmin() {
  const gameEditionAdminPage = makeGameEditionAdminPageFactory();
  return <HtmlComponent component={gameEditionAdminPage.render()} />;
}
