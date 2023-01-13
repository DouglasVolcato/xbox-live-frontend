import { useNavigate } from "react-router-dom";
import { makeLoginPage } from "../../factories/pages/login-page-factory";
import { getMenuRoute } from "../helpers/get-menu-route";
import { HtmlComponent } from "../helpers/html-component-helper";

export function Login() {
  const navigate = useNavigate();
  const loginPage = makeLoginPage();
  return <HtmlComponent component={loginPage.render()} />;
}
