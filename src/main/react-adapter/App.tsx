import "../../presentation/styles/title.css";
import "../../presentation/styles/input.css";
import "../../presentation/styles/button.css";
import "../../presentation/styles/paragraph.css";
import { useEffect, useState } from "react";
import { HtmlElement } from "../../Helpers/html-element-helper";
import { makeHomePageFactory } from "../factories/home-page-factory";

export function App() {
  const homepage = makeHomePageFactory();
  const [state, setState] = useState<any>({
    inputValue: "teste",
  });

  useEffect(() => {
    const mainInput = new HtmlElement("home-page-input");
    const mainButton = new HtmlElement("home-page-button");
    const mainParagraph = new HtmlElement("home-page-paragraph");

    mainButton.addEventListener("click", () => {
      mainParagraph.setInnerText(mainInput.getValue());
    });
  }, []);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: homepage.render() }} />
    </div>
  );
}
