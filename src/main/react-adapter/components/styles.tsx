import { makeStyleComposerFactory } from "../../factories/styles/style-composer-factory";
import { HtmlComponent } from "../helpers/html-component-helper";

export function StyleComposer() {
  const styles = makeStyleComposerFactory();
  return <HtmlComponent component={styles.compose()} />;
}
