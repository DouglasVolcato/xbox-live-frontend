import { ComponentInterface } from "../abstract/component-interface";

export class Paragraph implements ComponentInterface {
  constructor(
    private readonly text: string,
    private readonly className: string,
    private readonly id: string
  ) {}

  execute() {
    return `<p id="${this.id}" class="${this.className}">${this.text}</p>`;
  }
}
