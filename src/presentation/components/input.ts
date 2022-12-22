import { ComponentInterface } from "../abstract/component-interface";

export class Input implements ComponentInterface {
  constructor(
    private readonly type: string,
    private readonly value: string,
    private readonly className: string,
    private readonly id: string
  ) {}

  execute(): string {
    return `
        <input class="${this.className}" id="${this.id}" type=${this.type} value=${this.value} />
    `;
  }
}
