import { mockedGame } from "../../../infra/mocks/game";
import { Div } from "../../../presentation/components/div";
import { Image } from "../../../presentation/components/image";
import { Paragraph } from "../../../presentation/components/paragraph";
import { DivTypeEnum } from "../../../presentation/enums/div/div-type-enum";
import { FlexDirectionEnum } from "../../../presentation/enums/div/flex-direction-enum";
import { FlexJustificationEnum } from "../../../presentation/enums/div/flex-justification-enum";

export function makeAdminGamesListFactory(): Div {
  return new Div(
    DivTypeEnum.DIV,
    FlexDirectionEnum.ROW,
    FlexJustificationEnum.EVENLY,
    [],
    "adminGameList-gamesDiv",
    ["flex-wrap"]
  );
}
