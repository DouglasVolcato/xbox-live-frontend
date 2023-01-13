import { makeRegisterPage } from "../../factories/pages/register-page-factory";
import { HtmlComponent } from "../helpers/html-component-helper";

export function Register() {
  const registerPage = makeRegisterPage();
  return <HtmlComponent component={registerPage.render()} />;
}
