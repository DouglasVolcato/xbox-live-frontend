import { makeUserEditionAdminPageFactory } from "../../factories/pages/userEditionAdmin-page-factory";
import { HtmlComponent } from "../helpers/html-component-helper";

export function UserEditionAdmin() {
  const userEditionAdminPage = makeUserEditionAdminPageFactory();
  return <HtmlComponent component={userEditionAdminPage.render()} />;
}
