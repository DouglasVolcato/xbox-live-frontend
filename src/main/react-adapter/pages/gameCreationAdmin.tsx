import { makeGameCreationAdminPageFactory } from "../../factories/pages/gameCreationAdmin-page-factory";
import { HtmlComponent } from "../helpers/html-component-helper";

export function GameCreationAdmin() {
  const gameCreationAdminPage = makeGameCreationAdminPageFactory();
  return <HtmlComponent component={gameCreationAdminPage.render()} />;
}
