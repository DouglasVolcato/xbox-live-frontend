import { HtmlElement } from "../../helpers/html-element-helper";

export function changeStateValue(
  buttonId: string,
  inputId: string,
  paragraphId: string
) {
  const mainButton = new HtmlElement(buttonId);
  const mainInput = new HtmlElement(inputId);
  const mainParagraph = new HtmlElement(paragraphId);

  mainButton.addEventListener("click", () => {
    mainParagraph.setInnerText(mainInput.getValue());
  });
}
