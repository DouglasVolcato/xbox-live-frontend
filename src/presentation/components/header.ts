import { ComponentInterface } from "../abstract/component-interface";

export class Header implements ComponentInterface {
  constructor(
    private readonly components: ComponentInterface[],
    private readonly className: string,
    private readonly id: string
  ) {}

  execute(): string {
    let componentComposer: string = "";
    this.components.map((component) => {
      componentComposer = componentComposer + component.execute();
    });
    return `
        <header id="${this.id}" class="${this.className}">
            ${componentComposer}
        </header>
    `;
  }
}
