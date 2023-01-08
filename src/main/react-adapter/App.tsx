import { useEffect } from "react";
import { makeStyleComposerFactory } from "../factories/style-composer-factory";
import { makeHomePageFactory } from "../factories/home-page-factory";
import { HtmlComponent } from "./helpers/html-component-helper";
import { Routes, Route, BrowserRouter } from "react-router-dom";

export function App() {
  const styles = makeStyleComposerFactory();
  const homepage = makeHomePageFactory();

  function getMenuRoute(route: string) {
    console.log(route);
  }

  useEffect(() => {
    homepage.updateHours();
    homepage.getMenuRoute(getMenuRoute);
  }, []);

  return (
    <div>
      <BrowserRouter>
        <HtmlComponent component={styles.render()} />
        <Routes>
          <Route
            path="/"
            element={<HtmlComponent component={homepage.render()} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
