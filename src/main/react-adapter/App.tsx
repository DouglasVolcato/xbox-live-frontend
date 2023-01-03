import "../../presentation/styles/title.css";
import "../../presentation/styles/input.css";
import "../../presentation/styles/button.css";
import "../../presentation/styles/paragraph.css";
import { useEffect } from "react";
import { makeHomePageFactory } from "../factories/home-page-factory";

export function App() {
  const homepage = makeHomePageFactory();

  useEffect(() => {
    homepage.changeStateValue();
  }, []);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: homepage.render() }} />
    </div>
  );
}
