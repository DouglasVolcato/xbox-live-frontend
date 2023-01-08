import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Styles } from "./components/styles";
import { Homepage } from "./pages/home-page";

export function App() {
  return (
    <div>
      <BrowserRouter>
        <Styles />
        <Routes>
          <Route path="*" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
