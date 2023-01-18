import { useEffect } from "react";
import { makeLoginControllerFactory } from "../../factories/controllers/login-controller-factory";
import { HtmlComponent } from "../helpers/html-component-helper";

export function Login() {
  const loginPage = makeLoginControllerFactory();

  function teste() {
    alert("Logged in!");
  }

  useEffect(() => {
    loginPage.makeLogin(teste);
  }, []);

  return <HtmlComponent component={loginPage.renderPage()} />;
}
