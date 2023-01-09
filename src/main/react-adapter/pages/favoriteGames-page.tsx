import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { makeFavoriteGamesPageFactory } from "../../factories/pages/favoriteGames-page-factory";
import { getMenuRoute } from "../helpers/get-menu-route";
import { HtmlComponent } from "../helpers/html-component-helper";

export function FavoriteGames() {
  const navigate = useNavigate();
  const favoriteGames = makeFavoriteGamesPageFactory();

  function setRoute(route: string): void {
    navigate(getMenuRoute(route));
  }

  useEffect(() => {
    favoriteGames.updateHours();
    favoriteGames.getMenuRoute(setRoute);
  }, []);

  return <HtmlComponent component={favoriteGames.render()} />;
}
