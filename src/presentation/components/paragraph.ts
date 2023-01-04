import { HtmlElement } from "../helpers/html-element";
import { ComponentInterface } from "../abstract/component-interface";

export class Paragraph extends HtmlElement implements ComponentInterface {
  private readonly text: string;

  constructor(text: string, id: string) {
    super(id);
    this.text = text;
  }

  render() {
    return `<p id="${this.id}" class="paragraph">${this.text}</p>`;
  }
}
