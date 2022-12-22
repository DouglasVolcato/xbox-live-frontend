import "../../presentation/styles/title.css";
import "../../presentation/styles/input.css";
import "../../presentation/styles/button.css";
import "../../presentation/styles/paragraph.css";
import { useEffect, useState } from "react";
import { makeHomePageFactory } from "../factories/home-page-factory";
import { changeStateValue } from "../../utils/functions/change-state-value";

export function App() {
  const homepage = makeHomePageFactory();

  useEffect(() => {
    changeStateValue(
      "home-page-button",
      "home-page-input",
      "home-page-paragraph"
    );
  }, []);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: homepage.render() }} />
    </div>
  );
}
