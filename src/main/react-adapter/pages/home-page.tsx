import { useEffect } from "react";
import { makeHomePageFactory } from "../../factories/pages/home-page-factory";
import { HtmlComponent } from "../helpers/html-component-helper";

export function Homepage() {
  const homepage = makeHomePageFactory();

  useEffect(() => {
    homepage.updateHours();
  }, []);

  return <HtmlComponent component={homepage.render()} />;
}
