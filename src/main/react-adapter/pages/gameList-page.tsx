import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { makeGameListPageFactory } from "../../factories/pages/gameList-page-factory";
import { getMenuRoute } from "../helpers/get-menu-route";
import { HtmlComponent } from "../helpers/html-component-helper";

export function GameList() {
  const navigate = useNavigate();
  const gameList = makeGameListPageFactory();

  function setRoute(route: string): void {
    navigate(getMenuRoute(route));
  }

  useEffect(() => {
    gameList.updateHours();
    gameList.getMenuRoute(setRoute);
  }, []);

  return <HtmlComponent component={gameList.render()} />;
}
