import { HtmlElement } from "../helpers/html-element";
import { ComponentInterface } from "../abstract/component-interface";

export class Title extends HtmlElement implements ComponentInterface {
  private readonly title: string;

  constructor(title: string, id: string) {
    super(id);
    this.title = title;
  }

  render(): string {
    return `
        <h1 id="${this.id}" class="title">${this.title}</h1>
    `;
  }
}
