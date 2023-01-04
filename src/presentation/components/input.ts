import { HtmlElement } from "../helpers/html-element";
import { ComponentInterface } from "../abstract/component-interface";
import { InputTypeEnum } from "../enums/input/input-type-enum";

export class Input extends HtmlElement implements ComponentInterface {
  private readonly type: string;
  private readonly value: string;

  constructor(type: InputTypeEnum, value: string, id: string) {
    super(id);
    this.type = type;
    this.value = value;
  }

  render(): string {
    return `
        <input class="input" id="${this.id}" type="${this.type}" value="${this.value}" />
    `;
  }
}
