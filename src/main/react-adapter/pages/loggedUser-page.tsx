import { useEffect } from "react";
import { makeLoggedUserPageFactory } from "../../factories/pages/loggedUser-page-factory";
import { HtmlComponent } from "../helpers/html-component-helper";

export function LoggedUser() {
  const loggedUserPage = makeLoggedUserPageFactory();

  useEffect(() => {
    loggedUserPage.updateHours();
  }, []);

  return <HtmlComponent component={loggedUserPage.render()} />;
}
