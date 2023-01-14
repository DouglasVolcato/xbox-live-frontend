import { makeGamesAdminPageFactory } from "../../factories/pages/gamesAdmin-page-factory";
import { HtmlComponent } from "../helpers/html-component-helper";

export function GamesAdmin() {
  const gamesAdminPage = makeGamesAdminPageFactory();
  return <HtmlComponent component={gamesAdminPage.render()} />;
}
