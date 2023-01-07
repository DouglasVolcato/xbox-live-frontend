import { ComponentInterface } from "../abstract/component-interface";
import { DivTypeEnum } from "../enums/div/div-type-enum";
import { FlexDirectionEnum } from "../enums/div/flex-direction-enum";
import { FlexTypeEnum } from "../enums/div/flex-type-enum";
import { ComponentComposer } from "../helpers/composers/component-composer";
import { HtmlElement } from "../helpers/html/html-element";

export class Div extends HtmlElement implements ComponentInterface {
  private readonly divType: DivTypeEnum;
  private readonly components: ComponentInterface[];
  private readonly flexType: string;
  private readonly flexDirection: string;

  constructor(
    divType: DivTypeEnum,
    flexType: FlexTypeEnum,
    flexDirection: FlexDirectionEnum,
    components: ComponentInterface[],
    id: string,
    classes: string[] = []
  ) {
    super(id, classes);
    this.divType = divType;
    this.components = components;
    this.flexType = flexType;
    this.flexDirection = flexDirection;
  }

  render(): string {
    const flexType = this.getFlexType(this.flexType);
    const flexDirection = this.getFlexDirection(this.flexDirection);
    const components = new ComponentComposer(this.components);
    return `
        <${this.divType} id="${
      this.id
    }" class="div ${flexType} ${flexDirection} ${this.classes}">
            ${components.compose()}
        </${this.divType}>
    `;
  }

  private getFlexType(type: string): string {
    switch (type.toLowerCase()) {
      case "column":
        return "flex-d-column";
      case "row":
        return "flex-d-row";
      default:
        return "";
    }
  }

  private getFlexDirection(direction: string): string {
    switch (direction.toLowerCase()) {
      case "evenly":
        return "justify-evenly";
      case "around":
        return "justify-around";
      case "between":
        return "justify-between";
      default:
        return "";
    }
  }
}
