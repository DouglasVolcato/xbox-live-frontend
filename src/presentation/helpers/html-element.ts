export class HtmlElement {
  constructor(protected readonly id: string) {}

  getElement(): any {
    return document.getElementById(this.id);
  }

  getValue(): string {
    const element: any = document.getElementById(this.id);
    return element.value;
  }

  setValue(value: string): void {
    const element: any = document.getElementById(this.id);
    element.value = value;
  }

  addEventListener(type: string, callBackFunction = () => {}): void {
    document.getElementById(this.id)?.addEventListener(type, callBackFunction);
  }

  getInnerText(): string {
    const element: any = document.getElementById(this.id);
    return element.innerText;
  }

  setInnerText(value: string): void {
    const element: any = document.getElementById(this.id);
    element.innerText = value;
  }
}
