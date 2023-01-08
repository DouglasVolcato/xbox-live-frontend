import { makeStyleComposerFactory } from "../../factories/style-composer-factory";
import { HtmlComponent } from "../helpers/html-component-helper";

export function Styles() {
  const styles = makeStyleComposerFactory();
  return <HtmlComponent component={styles.render()} />;
}
