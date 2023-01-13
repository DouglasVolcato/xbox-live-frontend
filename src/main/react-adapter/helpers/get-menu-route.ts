export function getMenuRoute(route: string): string {
  switch (route.toLowerCase()) {
    case "favorite games":
      return "/favorite-games";
    case "game list":
      return "/game-list";
    case "logged profile":
      return "/logged-profile";
    default:
      return "/";
  }
}
