import { makeHomeAdminPageFactory } from "../../factories/pages/homeAdmin-page-factory";
import { HtmlComponent } from "../helpers/html-component-helper";

export function HomeAdmin() {
  const homeAdminPage = makeHomeAdminPageFactory();
  return <HtmlComponent component={homeAdminPage.render()} />;
}
