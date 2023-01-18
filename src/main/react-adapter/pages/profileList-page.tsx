import { useEffect } from "react";
import { makeProfileListControllerFactory } from "../../factories/controllers/profileList-controller-factory";
import { HtmlComponent } from "../helpers/html-component-helper";

export function ProfileList() {
  const profileList = makeProfileListControllerFactory();

  useEffect(() => {
    profileList.updateProfileCards()
  })

  return <HtmlComponent component={profileList.renderPage()} />;
}
