import { StyleComposer } from "../../presentation/helpers/composers/style-composer";

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
  ];

  return new StyleComposer([...globals, ...colors, ...components]);
}
