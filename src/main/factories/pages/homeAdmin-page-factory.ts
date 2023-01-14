import { Button } from "../../../presentation/components/button";
import { Div } from "../../../presentation/components/div";
import { Title } from "../../../presentation/components/title";
import { ButtonTypeEnum } from "../../../presentation/enums/button/button-type-enum";
import { DivTypeEnum } from "../../../presentation/enums/div/div-type-enum";
import { FlexDirectionEnum } from "../../../presentation/enums/div/flex-direction-enum";
import { FlexJustificationEnum } from "../../../presentation/enums/div/flex-justification-enum";
import { HomeAdminPage } from "../../../presentation/pages/homeAdmin-page";

export function makeHomeAdminPageFactory(): HomeAdminPage {
  const title = new Title("Admin home", "homeAdmin-title");

  const gamesHandlingButton = new Button(
    "Games",
    ButtonTypeEnum.BUTTON,
    "homeAdmin-buttonsDiv-gamesButton",
    ["border-light-blue", "background-dark-blue"]
  );
  const profilesHandlingButton = new Button(
    "Profiles",
    ButtonTypeEnum.BUTTON,
    "homeAdmin-buttonsDiv-profilesButton",
    ["border-light-green", "background-dark-green"]
  );
  const returnButton = new Button(
    "Return",
    ButtonTypeEnum.BUTTON,
    "homeAdmin-buttonsDiv-returnButton",
    ["border-light-red", "background-dark-red"]
  );

  const adminButtonsDiv = new Div(
    DivTypeEnum.DIV,
    FlexDirectionEnum.ROW,
    FlexJustificationEnum.EVENLY,
    [gamesHandlingButton, profilesHandlingButton, returnButton],
    "homeAdmin-buttonsDiv",
    ["flex-wrap"]
  );

  return new HomeAdminPage(title, adminButtonsDiv);
}
