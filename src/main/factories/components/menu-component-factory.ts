import { Button } from "../../../presentation/components/button";
import { Div } from "../../../presentation/components/div";
import { ButtonTypeEnum } from "../../../presentation/enums/button/button-type-enum";
import { DivTypeEnum } from "../../../presentation/enums/div/div-type-enum";
import { FlexDirectionEnum } from "../../../presentation/enums/div/flex-direction-enum";
import { FlexJustificationEnum } from "../../../presentation/enums/div/flex-justification-enum";

const { DIV } = DivTypeEnum;
const { ROW } = FlexDirectionEnum;
const { EVENLY } = FlexJustificationEnum;
const { BUTTON } = ButtonTypeEnum;

export function makeMenuFactory(): Div {
  const favoriteGamesButton = new Button(
    "Favorite Games",
    BUTTON,
    "homepage-menuDiv-favoriteGames",
    ["menuButton"]
  );

  const topImdbGamesButton = new Button(
    "Game List",
    BUTTON,
    "homepage-menuDiv-gameList",
    ["menuButton"]
  );

  const gameCategoriesButton = new Button(
    "Categories",
    BUTTON,
    "homepage-menuDiv-gameCategories",
    ["menuButton"]
  );

  return new Div(
    DIV,
    ROW,
    EVENLY,
    [favoriteGamesButton, topImdbGamesButton, gameCategoriesButton],
    "homepage-menuDiv",
    ["flex-wrap"]
  );
}
