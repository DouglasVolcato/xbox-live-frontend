import { Button } from "../../presentation/components/button";
import { Header } from "../../presentation/components/header";
import { Input } from "../../presentation/components/input";
import { Paragraph } from "../../presentation/components/paragraph";
import { Title } from "../../presentation/components/title";
import { ButtonTypeEnum } from "../../presentation/enums/button/button-type-enum";
import { InputTypeEnum } from "../../presentation/enums/input/input-type-enum";
import { HomePage } from "../../presentation/pages/home-page";
const { TEXT } = InputTypeEnum;
const { BUTTON } = ButtonTypeEnum;

export function makeHomePageFactory(): HomePage {
  const title = new Title("HomePage", "home-page-title");
  const header = new Header([title], "home-page-header");
  const input = new Input(TEXT, "Text", "home-page-input");
  const button = new Button("Send", BUTTON, "home-page-button");
  const paragraph = new Paragraph("Text", "home-page-paragraph");

  return new HomePage(header, input, button, paragraph);
}
