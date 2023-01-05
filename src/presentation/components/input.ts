import { HtmlElement } from "../helpers/html-element";
import { ComponentInterface } from "../abstract/component-interface";
import { InputTypeEnum } from "../enums/input/input-type-enum";

export class Input extends HtmlElement implements ComponentInterface {
  private readonly type: string;
  private readonly value: string;
  private readonly placeholder: string;

  constructor(
    type: InputTypeEnum,
    value: string,
    id: string,
    placeholder = ""
  ) {
    super(id);
    this.type = type;
    this.value = value;
    this.placeholder = placeholder;
  }

  render(): string {
    return `
        <input class="input" id="${this.id}" type="${this.type}" value="${this.value}" placeholder="${this.placeholder}" />
    `;
  }
}
