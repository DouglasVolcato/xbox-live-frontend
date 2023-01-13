import { makeLoginPage } from "../../factories/pages/login-page-factory";
import { HtmlComponent } from "../helpers/html-component-helper";

export function Login() {
  const loginPage = makeLoginPage();
  return <HtmlComponent component={loginPage.render()} />;
}
