import { Button } from "../../presentation/components/button";
import { Header } from "../../presentation/components/header";
import { Input } from "../../presentation/components/input";
import { Paragraph } from "../../presentation/components/paragraph";
import { Title } from "../../presentation/components/title";
import { HomePage } from "../../presentation/pages/home-page";

export function makeHomePageFactory(): HomePage {
  const title = new Title("HomePage", "title", "home-page-title");
  const header = new Header([title], "header", "home-page-header");
  const input = new Input("text", "Text", "input", "home-page-input");
  const button = new Button("Send", "button", "button", "home-page-button");
  const paragraph = new Paragraph("Text", "paragraph", "home-page-paragraph");

  return new HomePage(header, input, button, paragraph);
}
