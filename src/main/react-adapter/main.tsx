import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { RouteComposer } from "./components/routes";
import { StyleComposer } from "./components/styles";
import { FavoriteGames } from "./pages/favoriteGames-page";
import { GameList } from "./pages/gameList-page";
import { GamesAdmin } from "./pages/gamesAdmin-page";
import { Homepage } from "./pages/home-page";
import { HomeAdmin } from "./pages/homeAdmin-page";
import { LoggedUser } from "./pages/loggedUser-page";
import { Login } from "./pages/login-page";
import { ProfileCreation } from "./pages/profileCreation-page";
import { ProfileList } from "./pages/profileList-page";
import { Register } from "./pages/register-page";
import { UsersAdmin } from "./pages/usersAdmin-page";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <StyleComposer />
      <RouteComposer />
      <Routes>
        <Route path="home-admin" element={<HomeAdmin />} />
        <Route path="games-admin" element={<GamesAdmin />} />
        <Route path="users-admin" element={<UsersAdmin />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="profile-list" element={<ProfileList />} />
        <Route path="profile-creation" element={<ProfileCreation />} />
        <Route path="logged-profile" element={<LoggedUser />} />
        <Route path="favorite-games" element={<FavoriteGames />} />
        <Route path="game-list" element={<GameList />} />
        <Route path="*" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
