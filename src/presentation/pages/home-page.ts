import { PageInterface } from "../abstract/page-interface";
import { Div } from "../components/div";
import { Header } from "../components/header";
import { updateHour } from "./helpers/update-hour";

export class HomePage implements PageInterface {
  private readonly header: Header;
  private readonly gamesDiv: Div;
  private readonly menuDiv: Div;

  constructor(header: Header, gamesDiv: Div, menuDiv: Div) {
    this.header = header;
    this.gamesDiv = gamesDiv;
    this.menuDiv = menuDiv;
  }

  public render(): string {
    return `
        <main>
            ${this.header.render()}
            ${this.gamesDiv.render()}
            ${this.menuDiv.render()}
        </main>
    `;
  }

  public updateHours(): void {
    updateHour();
  }

  public getMenuRoute(callbackFunction: (event: any) => void): void {
    this.menuDiv.addEventListenerToChildren("click", (event: any) =>
      callbackFunction(event.target.innerText)
    );
  }
}
