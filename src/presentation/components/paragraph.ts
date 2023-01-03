import { HtmlElement } from "../helpers/html-element-helper";
import { ComponentInterface } from "../abstract/component-interface";

export class Paragraph extends HtmlElement implements ComponentInterface {
  private readonly text: string;
  private readonly className: string;

  constructor(text: string, className: string, id: string) {
    super(id);
    this.text = text;
    this.className = className;
  }

  render() {
    return `<p id="${this.id}" class="${this.className}">${this.text}</p>`;
  }
}
