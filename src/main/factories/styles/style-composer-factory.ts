import { StyleComposer } from "../../../presentation/helpers/composers/style-composer";

export function makeStyleComposerFactory(): StyleComposer {
  const globals = ["./src/presentation/styles/global/global.css"];
  const colors = [
    "./src/presentation/styles/colors/background-colors.css",
    "./src/presentation/styles/colors/border-colors.css",
  ];
  const components = [
    "./src/presentation/styles/components/title.css",
    "./src/presentation/styles/components/input.css",
    "./src/presentation/styles/components/button.css",
    "./src/presentation/styles/components/paragraph.css",
    "./src/presentation/styles/components/div.css",
    "./src/presentation/styles/components/image.css",
    "./src/presentation/styles/components/label.css",
    "./src/presentation/styles/components/form.css",
  ];
  const pages = [
    "./src/presentation/styles/pages/home-page.css",
    "./src/presentation/styles/pages/loggedUser-page.css",
  ];

  return new StyleComposer([...globals, ...colors, ...components, ...pages]);
}
