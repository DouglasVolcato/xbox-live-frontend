import { makeProfileListPageFactory } from "../../factories/pages/profileList-page-factory";
import { HtmlComponent } from "../helpers/html-component-helper";

export function ProfileList() {
  const profileList = makeProfileListPageFactory();
  return <HtmlComponent component={profileList.render()} />;
}
