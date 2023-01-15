import { makeLoggedUserPageFactory } from "../../factories/pages/loggedUser-page-factory";
import { HtmlComponent } from "../helpers/html-component-helper";

export function LoggedUser() {
  const loggedUserPage = makeLoggedUserPageFactory();
  return <HtmlComponent component={loggedUserPage.render()} />;
}
