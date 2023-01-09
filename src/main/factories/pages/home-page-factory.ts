import { HomePage } from "../../../presentation/pages/home-page";
import { makeHeaderFactory } from "../components/header-component-factory";
import { makeMenuFactory } from "../components/menu-component-factory";
import { makeGameListFactory } from "../components/gameList-component-factory";

export function makeHomePageFactory(): HomePage {
  const header = makeHeaderFactory();
  const gamesDiv = makeGameListFactory();
  const menuDiv = makeMenuFactory();

  return new HomePage(header, gamesDiv, menuDiv);
}
