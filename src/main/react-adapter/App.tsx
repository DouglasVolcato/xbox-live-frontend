import { useEffect } from "react";
import { makeStyleComposerFactory } from "../factories/style-composer-factory";
import { makeHomePageFactory } from "../factories/home-page-factory";
import { HtmlComponent } from "./helpers/html-component-helper";

export function App() {
  const styles = makeStyleComposerFactory();
  const homepage = makeHomePageFactory();

  useEffect(() => {
    homepage.updateHours();
  }, []);

  return (
    <div>
      <HtmlComponent component={styles.render()} />
      <HtmlComponent component={homepage.render()} />
    </div>
  );
}
