import { ComponentInterface } from "../abstract/component-interface";
import { HtmlElement } from "../helpers/html-element";

export class Header extends HtmlElement implements ComponentInterface {
  private readonly components: ComponentInterface[];

  constructor(
    components: ComponentInterface[],
    id: string,
    classes: string[] = []
  ) {
    super(id, classes);
    this.components = components;
  }

  render(): string {
    const componentComposer = this.getComponents(this.components);
    return `
        <header id="${this.id}" class="header ${this.classes}">
            ${componentComposer}
        </header>
    `;
  }

  private getComponents(components: ComponentInterface[]): string {
    let componentComposer = "";
    components.map((component) => {
      componentComposer = componentComposer + component.render();
    });
    return componentComposer;
  }
}
