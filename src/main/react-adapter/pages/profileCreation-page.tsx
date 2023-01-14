import { makeProfileCreationPageFactory } from "../../factories/pages/profileCreation-page-factory";
import { HtmlComponent } from "../helpers/html-component-helper";

export function ProfileCreation() {
  const profileCreationPage = makeProfileCreationPageFactory();
  return <HtmlComponent component={profileCreationPage.render()} />;
}
