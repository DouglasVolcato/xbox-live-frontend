import { useEffect } from "react";
import { makeUserEditionAdminControllerFactory } from "../../factories/controllers/userEditionAdmin-controller-factory";
import { HtmlComponent } from "../helpers/html-component-helper";

export function UserEditionAdmin() {
  const userEditionAdminPage = makeUserEditionAdminControllerFactory();

  useEffect(() => {
    userEditionAdminPage.getUserInfo();
  });

  return <HtmlComponent component={userEditionAdminPage.renderPage()} />;
}
