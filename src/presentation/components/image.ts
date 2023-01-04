import { HtmlElement } from "../helpers/html-element";
import { ComponentInterface } from "../abstract/component-interface";

export class Image extends HtmlElement implements ComponentInterface {
  private readonly alt: string;
  private readonly src: string;

  constructor(alt: string, src: string, id: string) {
    super(id);
    this.alt = alt;
    this.src = src;
  }

  render(): string {
    return `
        <img id="${this.id}" class="image" src="${this.src}" alt="${this.alt}" />
    `;
  }
}
