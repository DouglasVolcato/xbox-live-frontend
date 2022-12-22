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
    private readonly Paragraph: Paragraph
  ) {}

  render() {
    return `
        <html>
            ${this.header.execute()}
            ${this.input.execute()}
            ${this.button.execute()}
            ${this.Paragraph.execute()}
        </html>
    `;
  }
}
