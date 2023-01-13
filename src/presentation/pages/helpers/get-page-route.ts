import { HtmlElement } from "../../helpers/html/html-element";

export function getPageRoute(
  htmlElement: HtmlElement,
  callbackFunction: (event: any) => void
) {
  htmlElement.addEventListenerToChildren("click", (event: any) =>
    callbackFunction(event.target.innerText)
  );
  document
    .getElementById("header-userInfo-userImage")
    ?.addEventListener("click", (event: any) => {
      callbackFunction("Logged Profile");
    });
}
