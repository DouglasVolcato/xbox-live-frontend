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

  function testLogout() {
    alert("Logged out!");
  }

  useEffect(() => {
    loggedUserPage.getUserInfo();
    loggedUserPage.updateUser(testUpdateUser);
    loggedUserPage.deleteUser(testDeleteUser);
    loggedUserPage.getProfileInfo();
    loggedUserPage.updateProfile(testUpdateProfile);
    loggedUserPage.deleteProfile(testDeleteProfile);
    loggedUserPage.logout(testLogout);
  });

  return <HtmlComponent component={loggedUserPage.renderPage()} />;
}
