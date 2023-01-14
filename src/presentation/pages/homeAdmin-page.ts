import { PageInterface } from "../abstract/page-interface";
import { Div } from "../components/div";
import { Title } from "../components/title";

export class HomeAdminPage implements PageInterface {
  private readonly pageTitle: Title;
  private readonly buttonsDiv: Div;

  constructor(pageTitle: Title, buttonsDiv: Div) {
    this.pageTitle = pageTitle;
    this.buttonsDiv = buttonsDiv;
  }

  public render(): string {
    return `
        <main>
          ${this.pageTitle.render()}
          ${this.buttonsDiv.render()}
        </main>
    `;
  }
}
