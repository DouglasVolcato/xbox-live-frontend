import { makeUsersAdminPageFactory } from "../../factories/pages/usersAdmin-page-factory";
import { HtmlComponent } from "../helpers/html-component-helper";

export function UsersAdmin() {
  const usersAdminPage = makeUsersAdminPageFactory();
  return <HtmlComponent component={usersAdminPage.render()} />;
}
