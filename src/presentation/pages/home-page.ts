import { PageInterface } from "../abstract/page-interface";
import { Div } from "../components/div";
import { Header } from "../components/header";
import { HtmlElement } from "../helpers/html/html-element";

export class HomePage implements PageInterface {
  private readonly header: Header;
  private readonly gamesDiv: Div;
  private readonly menuDiv: Div;
  private readonly gameCards: Div[];

  constructor(header: Header, gamesDiv: Div, menuDiv: Div, gameCards: Div[]) {
    this.header = header;
    this.gamesDiv = gamesDiv;
    this.menuDiv = menuDiv;
    this.gameCards = gameCards;
  }

  render(): string {
    return `
        <main>
            ${this.header.render()}
            ${this.gamesDiv.render()}
            ${this.menuDiv.render()}
        </main>
    `;
  }

  public gameCardClickTest(): void {
    this.gameCards.map((gameCard) => {
      gameCard.addEventListenerToAll("click", () => {
        console.log("teste");
      });
    });
  }
}
