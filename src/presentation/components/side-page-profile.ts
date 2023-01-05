import { HtmlElement } from "../helpers/html-element";
import { ComponentInterface } from "../abstract/component-interface";
import { Image } from "./image";
import { Paragraph } from "./paragraph";

export class SidePageProfile extends HtmlElement implements ComponentInterface {
  private readonly imageLink: string;
  private readonly profileName: string;

  constructor(imageLink: string, profileName: string, id: string) {
    super(id);
    this.profileName = profileName;
    this.imageLink = imageLink;
  }

  render() {
    const profileImage = new Image(
      "profile",
      this.imageLink,
      "sidePageProfile-image"
    );
    const profileName = new Paragraph(
      this.profileName,
      "sidePageProfile-paragraph"
    );

    return `
        <div class="sidePageProfile" id="${this.id}">
            ${profileImage.render()} ${profileName.render()}
        </div>
    `;
  }
}
