import { HtmlElement } from "../Helpers/html-element-helper";
import { ComponentInterface } from "../abstract/component-interface";

export class Header extends HtmlElement implements ComponentInterface {
  private readonly components: ComponentInterface[];
  private readonly className: string;

  constructor(components: ComponentInterface[], className: string, id: string) {
    super(id);
    this.components = components;
    this.className = className;
  }

  render(): string {
    let componentComposer: string = "";
    this.components.map((component) => {
      componentComposer = componentComposer + component.render();
    });
    return `
        <header id="${this.id}" class="${this.className}">
            ${componentComposer}
        </header>
    `;
  }
}
