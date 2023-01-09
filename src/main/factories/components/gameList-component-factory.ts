import { mockedGame } from "../../../infra/mocks/game";
import { Div } from "../../../presentation/components/div";
import { Image } from "../../../presentation/components/image";
import { Paragraph } from "../../../presentation/components/paragraph";
import { DivTypeEnum } from "../../../presentation/enums/div/div-type-enum";
import { FlexDirectionEnum } from "../../../presentation/enums/div/flex-direction-enum";
import { FlexJustificationEnum } from "../../../presentation/enums/div/flex-justification-enum";

const { DIV } = DivTypeEnum;
const { COLUMN, ROW } = FlexDirectionEnum;
const { EVENLY } = FlexJustificationEnum;

export function makeGameListFactory(): Div {
  const gameTitle = new Paragraph(
    mockedGame.title,
    "homepage-gamesDiv-gameCard-gameTitle"
  );
  const gameImage = new Image(
    "Game image",
    mockedGame.coverImageUrl,
    "homepage-gamesDiv-gameCard-gameImage",
    ["gameCardImage"]
  );
  const gameCard = new Div(
    DIV,
    COLUMN,
    EVENLY,
    [gameImage, gameTitle],
    "homepage-gamesDiv-gameCard",
    ["homepage-gameCard", "background-dark-blue", "border-light-gray"]
  );

  return new Div(
    DIV,
    ROW,
    EVENLY,
    [gameCard, gameCard, gameCard, gameCard],
    "homepage-gamesDiv",
    ["flex-wrap"]
  );
}
