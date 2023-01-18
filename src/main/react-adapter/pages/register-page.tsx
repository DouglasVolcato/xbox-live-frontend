import { useEffect } from "react";
import { makeRegisterControllerFactory } from "../../factories/controllers/register-controller-factory";
import { HtmlComponent } from "../helpers/html-component-helper";

export function Register() {
  const registerPage = makeRegisterControllerFactory();

  function teste() {
    alert("User registered!");
  }

  useEffect(() => {
    registerPage.registerUser(teste);
  }, []);

  return <HtmlComponent component={registerPage.renderPage()} />;
}
