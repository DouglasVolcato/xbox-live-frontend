import "../../presentation/styles/header.css";
import "../../presentation/styles/input.css";
import "../../presentation/styles/button.css";
import "../../presentation/styles/paragraph.css";
import { useEffect, useState } from "react";
import { Header } from "../../presentation/components/header";
import { Input } from "../../presentation/components/input";
import { Button } from "../../presentation/components/button";
import { Paragraph } from "../../presentation/components/paragraph";

export function App() {
  const [state, setState] = useState<any>({
    inputValue: "teste",
  });

  useEffect(() => {
    const script = document.getElementById("myScript")?.innerHTML;
    if (script) {
      window.eval(script);
    }

    document
      .getElementById("mainButton")
      ?.addEventListener("click", function () {
        setState({ inputValue: document.getElementById("main-input")?.value });
      });
  }, []);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: Header("Homepage") }} />;
      <div dangerouslySetInnerHTML={{ __html: Input() }} />;
      <div dangerouslySetInnerHTML={{ __html: Button() }} />;
      <div dangerouslySetInnerHTML={{ __html: Paragraph(state.inputValue) }} />;
    </div>
  );
}
