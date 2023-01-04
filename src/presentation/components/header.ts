import { ComponentInterface } from "../abstract/component-interface";
import { HtmlElement } from "../helpers/html-element";

export class Header extends HtmlElement implements ComponentInterface {
  private readonly components: ComponentInterface[];

  constructor(components: ComponentInterface[], id: string) {
    super(id);
    this.components = components;
  }

  render(): string {
    let componentComposer: string = "";
    this.components.map((component) => {
      componentComposer = componentComposer + component.render();
    });
    return `
        <header id="${this.id}" class="header">
            ${componentComposer}
        </header>
    `;
  }
}
