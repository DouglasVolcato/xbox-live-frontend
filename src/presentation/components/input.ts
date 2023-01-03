import { HtmlElement } from "../helpers/html-element-helper";
import { ComponentInterface } from "../abstract/component-interface";

export class Input extends HtmlElement implements ComponentInterface {
  private readonly type: string;
  private readonly value: string;
  private readonly className: string;

  constructor(type: string, value: string, className: string, id: string) {
    super(id);
    this.type = type;
    this.value = value;
    this.className = className;
  }

  render(): string {
    return `
        <input class="${this.className}" id="${this.id}" type=${this.type} value=${this.value} />
    `;
  }
}
