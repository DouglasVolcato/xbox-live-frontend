import { mockedGame } from "../../../infra/mocks/game";
import { Div } from "../../../presentation/components/div";
import { Image } from "../../../presentation/components/image";
import { Paragraph } from "../../../presentation/components/paragraph";
import { DivTypeEnum } from "../../../presentation/enums/div/div-type-enum";
import { FlexDirectionEnum } from "../../../presentation/enums/div/flex-direction-enum";
import { FlexJustificationEnum } from "../../../presentation/enums/div/flex-justification-enum";

export function makeAdminGamesListFactory(): Div {
  const gameTitle = new Paragraph(
    mockedGame.title,
    "adminGameList-gamesDiv-gameCard-gameTitle"
  );
  const gameImage = new Image(
    "Game image",
    mockedGame.coverImageUrl,
    "adminGameList-gamesDiv-gameCard-gameImage",
    ["gameCardImage"]
  );
  const gameCard = new Div(
    DivTypeEnum.DIV,
    FlexDirectionEnum.COLUMN,
    FlexJustificationEnum.EVENLY,
    [gameImage, gameTitle],
    "adminGameList-gamesDiv-gameCard",
    ["homepage-gameCard", "background-dark-blue", "border-light-gray"]
  );

  return new Div(
    DivTypeEnum.DIV,
    FlexDirectionEnum.ROW,
    FlexJustificationEnum.EVENLY,
    [gameCard, gameCard, gameCard, gameCard],
    "adminGameList-gamesDiv",
    ["flex-wrap"]
  );
}
