import { PageInterface } from "../abstract/page-interface";
import { Button } from "../components/button";
import { Header } from "../components/header";
import { Input } from "../components/input";
import { Paragraph } from "../components/paragraph";

export class HomePage implements PageInterface {
  constructor(
    private readonly header: Header,
    private readonly input: Input,
    private readonly button: Button,
    private readonly paragraph: Paragraph
  ) {}

  render(): string {
    return `
        <main>
            ${this.header.render()}
            ${this.input.render()}
            ${this.button.render()}
            ${this.paragraph.render()}
        </main>
    `;
  }

  changeStateValue(): void {
    this.button.addEventListener("click", () => {
      this.paragraph.setInnerText(this.input.getValue());
    });
  }
}
