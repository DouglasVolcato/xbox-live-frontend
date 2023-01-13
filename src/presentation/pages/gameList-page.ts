import { PageInterface } from "../abstract/page-interface";
import { Div } from "../components/div";
import { Header } from "../components/header";
import { Title } from "../components/title";
import { getPageRoute } from "./helpers/get-page-route";
import { updateHour } from "./helpers/update-hour";

export class GameListPage implements PageInterface {
  private readonly header: Header;
  private readonly title: Title;
  private readonly menuDiv: Div;
  private readonly gameList: Div;

  constructor(header: Header, menuDiv: Div, title: Title, gameList: Div) {
    this.header = header;
    this.title = title;
    this.menuDiv = menuDiv;
    this.gameList = gameList;
  }

  public render(): string {
    return `
        <main>
            ${this.header.render()}
            ${this.menuDiv.render()}
            ${this.title.render()}
            ${this.gameList.render()}
        </main>
    `;
  }

  public updateHours(): void {
    updateHour();
  }

  public getMenuRoute(callbackFunction: (event: any) => void): void {
    getPageRoute(this.menuDiv, callbackFunction);
  }
}
