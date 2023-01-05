import { HtmlElement } from "../helpers/html-element";
import { ComponentInterface } from "../abstract/component-interface";
import { ButtonTypeEnum } from "../enums/button/button-type-enum";

export class Button extends HtmlElement implements ComponentInterface {
  private readonly name: string;
  private readonly type: string;

  constructor(name: string, type: ButtonTypeEnum, id: string) {
    super(id);
    this.name = name;
    this.type = type;
  }

  render(): string {
    return `
      <button id="${this.id}" class="button" type="${this.type}">${this.name}</button>
    `;
  }
}
