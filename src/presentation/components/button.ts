import { HtmlElement } from "../Helpers/html-element-helper";
import { ComponentInterface } from "../abstract/component-interface";

export class Button extends HtmlElement implements ComponentInterface {
  private readonly name: string;
  private readonly type: string;
  private readonly className: string;

  constructor(name: string, type: string, className: string, id: string) {
    super(id);
    this.name = name;
    this.type = type;
    this.className = className;
  }

  render(): string {
    return `<button id="${this.id}" class="${this.className}" type="${this.type}">${this.name}</button>`;
  }
}
