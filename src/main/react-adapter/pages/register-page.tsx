import { useNavigate } from "react-router-dom";
import { makeLoginPage } from "../../factories/pages/login-page-factory";
import { makeRegisterPage } from "../../factories/pages/register-page-factory";
import { getMenuRoute } from "../helpers/get-menu-route";
import { HtmlComponent } from "../helpers/html-component-helper";

export function Register() {
  const navigate = useNavigate();
  const registerPage = makeRegisterPage();
  return <HtmlComponent component={registerPage.render()} />;
}
