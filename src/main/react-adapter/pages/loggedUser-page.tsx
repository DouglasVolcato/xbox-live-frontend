import { useEffect } from "react";
import { makeLoggedUserControllerFactory } from "../../factories/controllers/loggedUser-controller-factory";
import { HtmlComponent } from "../helpers/html-component-helper";

export function LoggedUser() {
  const loggedUserPage = makeLoggedUserControllerFactory();

  function testUpdateUser() {
    alert("User Updated!");
  }

  function testUpdateProfile() {
    alert("Profile Updated!");
  }

  useEffect(() => {
    loggedUserPage.getUserInfo();
    loggedUserPage.updateUser(testUpdateUser);

    loggedUserPage.getProfileInfo();
    loggedUserPage.updateProfile(testUpdateProfile);
  });

  return <HtmlComponent component={loggedUserPage.renderPage()} />;
}
