import { ComponentInterface } from "../abstract/component-interface";

export class Title implements ComponentInterface {
  constructor(
    private readonly title: string,
    private readonly className: string,
    private readonly id: string
  ) {}

  execute(): string {
    return `
        <h1 id="${this.id}" class="${this.className}">${this.title}</h1>
    `;
  }
}
