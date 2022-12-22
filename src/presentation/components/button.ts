import { ComponentInterface } from "../abstract/component-interface";

export class Button implements ComponentInterface {
  constructor(
    private readonly name: string,
    private readonly type: string,
    private readonly className: string,
    private readonly id: string
  ) {}

  execute(): string {
    return `<button id="${this.id}" class="${this.className}" type="${this.type}" id="main-button">${this.name}</button>`;
  }
}
