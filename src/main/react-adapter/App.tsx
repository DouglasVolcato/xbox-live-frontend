import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Styles } from "./components/styles";
import { FavoriteGames } from "./pages/favoriteGames-page";
import { GameList } from "./pages/gameList-page";
import { Homepage } from "./pages/home-page";
import { LoggedUser } from "./pages/loggedUser-page";
import { LoginPage } from "./pages/login-page";

export function App() {
  return (
    <div>
      <BrowserRouter>
        <Styles />
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route path="logged-profile" element={<LoggedUser />} />
          <Route path="favorite-games" element={<FavoriteGames />} />
          <Route path="game-list" element={<GameList />} />
          <Route path="*" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
