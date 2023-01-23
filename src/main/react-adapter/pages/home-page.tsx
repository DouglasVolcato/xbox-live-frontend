import { useEffect } from "react";
import { makeHomePageControllerFactory } from "../../factories/controllers/homePage-controller-factory";
import { HtmlComponent } from "../helpers/html-component-helper";

export function Homepage() {
  const homepage = makeHomePageControllerFactory();

  function test() {
    alert("Game selected!");
  }

  useEffect(() => {
    homepage.setGameList(test);
    homepage.updateHeader();
  });

  return <HtmlComponent component={homepage.renderPage()} />;
}
