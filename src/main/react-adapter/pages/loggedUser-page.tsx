import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { makeLoggedUserPageFactory } from "../../factories/pages/loggedUser-page-factory";
import { getMenuRoute } from "../helpers/get-menu-route";
import { HtmlComponent } from "../helpers/html-component-helper";

export function LoggedUser() {
  const navigate = useNavigate();
  const loggedUserPage = makeLoggedUserPageFactory();

  function setRoute(route: string): void {
    navigate(getMenuRoute(route));
  }

  useEffect(() => {
    loggedUserPage.updateHours();
    loggedUserPage.getMenuRoute(setRoute);
  }, []);

  return <HtmlComponent component={loggedUserPage.render()} />;
}
