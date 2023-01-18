import { RouteComposer } from "../../../presentation/helpers/composers/route-composer";

export function makeRouteComposerFactory(): RouteComposer {
  return new RouteComposer([
    { componentId: "menuDiv-home", route: "/" },
    { componentId: "menuDiv-favoriteGames", route: "/favorite-games" },
    { componentId: "menuDiv-gameList", route: "/game-list" },
    { componentId: "header-userInfo-userImage", route: "/logged-profile" },
    { componentId: "loginForm-buttonsDiv-registerButton", route: "/register" },
    {
      componentId: "registerForm-buttonsDiv-closeButtonButton",
      route: "/login",
    },
    { componentId: "profileList-addProfileButton", route: "/profile-creation" },
    {
      componentId: "profileCreationForm-buttonsDiv-closeButton",
      route: "/profile-list",
    },
  ]);
}
