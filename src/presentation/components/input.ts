export function Input(value = "Input", type = "text"): string {
  return `
        <input class="input" id="main-input" type=${type} value=${value} />
    `;
}
