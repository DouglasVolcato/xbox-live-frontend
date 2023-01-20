import { useEffect } from "react";
import { makeProfileListControllerFactory } from "../../factories/controllers/profileList-controller-factory";
import { HtmlComponent } from "../helpers/html-component-helper";

export function ProfileList() {
  const profileList = makeProfileListControllerFactory();

  function test() {
    alert("Profile selected!");
  }

  useEffect(() => {
    profileList.updateProfileCards(test);
  });

  return <HtmlComponent component={profileList.renderPage()} />;
}
