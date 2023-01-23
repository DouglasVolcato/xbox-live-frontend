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

  function testDeleteProfile() {
    alert("Deleted!");
  }

  function testDeleteUser() {
    alert("Deleted!");
  }

  useEffect(() => {
    loggedUserPage.getUserInfo();
    loggedUserPage.updateUser(testUpdateUser);
    loggedUserPage.deleteUser(testDeleteUser);
    loggedUserPage.getProfileInfo();
    loggedUserPage.updateProfile(testUpdateProfile);
    loggedUserPage.deleteProfile(testDeleteProfile);
  });

  return <HtmlComponent component={loggedUserPage.renderPage()} />;
}
