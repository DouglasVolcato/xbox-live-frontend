import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { makeHomePageFactory } from "../../factories/pages/home-page-factory";
import { getMenuRoute } from "../helpers/get-menu-route";
import { HtmlComponent } from "../helpers/html-component-helper";

export function Homepage() {
  const navigate = useNavigate();
  const homepage = makeHomePageFactory();

  function setRoute(route: string): void {
    navigate(getMenuRoute(route));
  }

  useEffect(() => {
    homepage.updateHours();
    homepage.getMenuRoute(setRoute);
  }, []);

  return <HtmlComponent component={homepage.render()} />;
}
