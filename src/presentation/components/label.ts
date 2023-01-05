import { HtmlElement } from "../helpers/html-element";
import { ComponentInterface } from "../abstract/component-interface";
import { InputTypeEnum } from "../enums/input/input-type-enum";

export class Label extends HtmlElement implements ComponentInterface {
  private readonly text: string;

  constructor(text: string, id: string) {
    super(id);
    this.text = text;
  }

  render(): string {
    return `
        <label class="label" id="${this.id}">${this.text}</label>
    `;
  }
}
