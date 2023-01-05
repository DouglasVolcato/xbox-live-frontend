import { HtmlElement } from "../helpers/html-element";
import { ComponentInterface } from "../abstract/component-interface";
import { Paragraph } from "./paragraph";

export class SidePageClock extends HtmlElement implements ComponentInterface {
  private readonly hour: string;

  constructor(hour: string, id: string) {
    super(id);
    this.hour = hour;
  }

  render() {
    const clock = new Paragraph(this.hour, "sidePageClock-clock");

    return `
        <div class="sidePageClock" id="${this.id}">
         ${clock.render()}
        </div>
    `;
  }
}
