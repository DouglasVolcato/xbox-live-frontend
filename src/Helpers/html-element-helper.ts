export class HtmlElement {
  constructor(private readonly id: string) {}

  getElement(): any {
    return document.getElementById(this.id);
  }

  getValue(): string {
    const element: any = document.getElementById(this.id);
    return element.value;
  }

  addEventListener(type: string, callBackFunction = () => {}): void {
    document.getElementById(this.id)?.addEventListener(type, callBackFunction);
  }

  setValue(value: string): void {
    const element: any = document.getElementById(this.id);
    element.value = value;
  }

  setInnerText(value: string): void {
    const element: any = document.getElementById(this.id);
    element.innerText = value;
  }
}
