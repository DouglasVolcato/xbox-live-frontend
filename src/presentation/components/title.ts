import { HtmlElement } from "../helpers/html-element-helper";
import { ComponentInterface } from "../abstract/component-interface";

export class Title extends HtmlElement implements ComponentInterface {
  private readonly title: string;
  private readonly className: string;

  constructor(title: string, className: string, id: string) {
    super(id);
    this.title = title;
    this.className = className;
  }

  render(): string {
    return `
        <h1 id="${this.id}" class="${this.className}">${this.title}</h1>
    `;
  }
}
