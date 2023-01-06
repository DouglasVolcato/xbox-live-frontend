import { ComponentInterface } from "../abstract/component-interface";
import { FlexDirectionEnum } from "../enums/flex-body/flex-direction-enum";
import { FlexTypeEnum } from "../enums/flex-body/flex-type-enum";
import { HtmlElement } from "../helpers/html-element";

export class Div extends HtmlElement implements ComponentInterface {
  private readonly components: ComponentInterface[];
  private readonly flexType: string;
  private readonly flexDirection: string;

  constructor(
    components: ComponentInterface[],
    flexType: FlexTypeEnum,
    flexDirection: FlexDirectionEnum,
    id: string
  ) {
    super(id);
    this.components = components;
    this.flexType = flexType;
    this.flexDirection = flexDirection;
  }

  render(): string {
    const componentComposer = this.getComponents(this.components);
    return `
        <div id="${this.id}" class="flex-body ${this.getFlexType(
      this.flexType
    )} ${this.getFlexDirection(this.flexDirection)}">
            ${componentComposer}
        </div>
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

  private getComponents(components: ComponentInterface[]): string {
    let componentComposer = "";
    components.map((component) => {
      componentComposer = componentComposer + component.render();
    });
    return componentComposer;
  }
}
