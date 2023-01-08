import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Styles } from "./components/styles";
import { GameList } from "./pages/gameList-page";
import { Homepage } from "./pages/home-page";

export function App() {
  return (
    <div>
      <BrowserRouter>
        <Styles />
        <Routes>
          <Route path="game-list" element={<GameList />} />
          <Route path="*" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
