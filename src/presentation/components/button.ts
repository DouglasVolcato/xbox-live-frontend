export function Button(name = "Button", type = "button"): string {
  return `<button class="button" type="${type}" id="mainButton">${name}</button>`;
}
