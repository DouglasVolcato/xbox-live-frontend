import { makeHomePageFactory } from "../../factories/pages/home-page-factory";
import { HtmlComponent } from "../helpers/html-component-helper";

export function Homepage() {
  const homepage = makeHomePageFactory();
  return <HtmlComponent component={homepage.render()} />;
}
