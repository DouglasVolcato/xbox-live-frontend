export class StyleComposer {
  constructor(private readonly styleFilePaths: string[]) {}

  render(): string {
    let styleComposer = "";
    this.styleFilePaths.map((stylePath) => {
      styleComposer =
        styleComposer + `<link rel="stylesheet" href="${stylePath}">`;
    });
    return styleComposer;
  }
}
