import { useEffect } from "react";
import { makeUsersAdminControllerFactory } from "../../factories/controllers/usersAdmin-controller-factory";
import { HtmlComponent } from "../helpers/html-component-helper";

export function UsersAdmin() {
  const usersAdminPage = makeUsersAdminControllerFactory();

  function userPageNavitation() {
    alert("User selected");
  }

  useEffect(() => {
    usersAdminPage.setUserList(userPageNavitation);
  });

  return <HtmlComponent component={usersAdminPage.renderPage()} />;
}
