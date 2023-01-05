import { ComponentInterface } from "../abstract/component-interface";
import { ButtonTypeEnum } from "../enums/button/button-type-enum";
import { InputTypeEnum } from "../enums/input/input-type-enum";
import { HtmlElement } from "../helpers/html-element";
import { Button } from "./button";
import { Input } from "./input";
import { Label } from "./label";
import { Title } from "./title";

type InputTypeParam = {
  type: InputTypeEnum;
  value: string;
  placeholder: string;
  label: string;
};

type ButtonTypeParam = {
  name: string;
  type: ButtonTypeEnum;
};

export class Form extends HtmlElement implements ComponentInterface {
  private readonly title: string;
  private readonly inputs: InputTypeParam[];
  private readonly buttons: ButtonTypeParam[];

  constructor(
    title: string,
    inputs: InputTypeParam[],
    buttons: ButtonTypeParam[],
    id: string
  ) {
    super(id);
    this.title = title;
    this.inputs = inputs;
    this.buttons = buttons;
  }

  render(): string {
    const title = new Title(this.title, "form-title").render();

    let inputs = "";
    this.inputs.map((input) => {
      const newInput = new Input(
        input.type,
        input.value,
        "form-input-" + input.placeholder.toLowerCase(),
        input.placeholder
      );
      const newLabel = new Label(input.label, "form-label");
      inputs = inputs + `${newLabel.render()} ${newInput.render()}`;
    });

    let buttons = "";
    this.buttons.map((button) => {
      const newButton = new Button(
        button.name,
        button.type,
        "form-buttons-" + button.name
      );
      buttons = buttons + newButton.render();
    });

    return `
        <form id="${this.id}" class="form">
            ${title}
            ${inputs}
            <div class="form-buttons">
                ${buttons}
            </div>
        </header>
    `;
  }
}
