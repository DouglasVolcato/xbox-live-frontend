import { HtmlElement } from "../helpers/html-element";
import { ComponentInterface } from "../abstract/component-interface";
import { Paragraph } from "./paragraph";
import { Image } from "./image";

export class MenuIcon extends HtmlElement implements ComponentInterface {
  private readonly title: string;
  private readonly imageLink: string;

  constructor(title: string, imageLink: string, id: string) {
    super(id);
    this.title = title;
    this.imageLink = imageLink;
  }

  render() {
    const image = new Image("menu-icon", this.imageLink, "menuIcon-image");
    const title = new Paragraph(this.title, "menuIcon-title");

    return `
        <div class="menuIcon" id="${this.id}">
          ${image.render()}
          ${title.render()}
        </div>
    `;
  }
}
