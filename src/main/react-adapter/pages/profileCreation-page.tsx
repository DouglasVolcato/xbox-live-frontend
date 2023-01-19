import { useEffect } from "react";
import { makeProfileCreationControllerFactory } from "../../factories/controllers/profileCreation-controller-factory";
import { HtmlComponent } from "../helpers/html-component-helper";

export function ProfileCreation() {
  const profileCreationController = makeProfileCreationControllerFactory();

  function teste() {
    alert("Profile created!");
  }

  useEffect(() => {
    profileCreationController.createProfile(teste);
  });

  return <HtmlComponent component={profileCreationController.renderPage()} />;
}
