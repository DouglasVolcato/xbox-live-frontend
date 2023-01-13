import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Styles } from "./components/styles";
import { FavoriteGames } from "./pages/favoriteGames-page";
import { GameList } from "./pages/gameList-page";
import { Homepage } from "./pages/home-page";
import { LoggedUser } from "./pages/loggedUser-page";
import { Login } from "./pages/login-page";
import { Register } from "./pages/register-page";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Styles />
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="logged-profile" element={<LoggedUser />} />
        <Route path="favorite-games" element={<FavoriteGames />} />
        <Route path="game-list" element={<GameList />} />
        <Route path="*" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
