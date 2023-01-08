import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { makeHomePageFactory } from "../../factories/home-page-factory";
import { HtmlComponent } from "../helpers/html-component-helper";

export function Homepage() {
  const navigate = useNavigate();
  const homepage = makeHomePageFactory();

  function getMenuRoute(route: string): void {
    switch (route.toLowerCase()) {
      case "favorite games":
        navigate("/favorite-games");
        return;
      case "top imdbs":
        navigate("/top-imdbs");
        return;
      case "categories":
        navigate("/categories");
        return;
      default:
        navigate("/");
        return;
    }
  }

  useEffect(() => {
    homepage.updateHours();
    homepage.getMenuRoute(getMenuRoute);
  }, []);

  return <HtmlComponent component={homepage.render()} />;
}
