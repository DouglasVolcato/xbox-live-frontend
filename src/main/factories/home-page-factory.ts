import { mockedGame } from "../../infra/mocks/game";
import { Div } from "../../presentation/components/div";
import { Header } from "../../presentation/components/header";
import { Image } from "../../presentation/components/image";
import { Paragraph } from "../../presentation/components/paragraph";
import { Title } from "../../presentation/components/title";
import { DivTypeEnum } from "../../presentation/enums/div/div-type-enum";
import { FlexDirectionEnum } from "../../presentation/enums/div/flex-direction-enum";
import { FlexJustificationEnum } from "../../presentation/enums/div/flex-justification-enum";
import { HomePage } from "../../presentation/pages/home-page";

const { DIV } = DivTypeEnum;
const { COLUMN, ROW } = FlexDirectionEnum;
const { BETWEEN, EVENLY } = FlexJustificationEnum;

export function makeHomePageFactory(): HomePage {
  const title = new Title("HomePage", "homepage-title");
  const header = new Header([title], "homepage-header");
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
  const gamesDiv = new Div(
    DIV,
    ROW,
    EVENLY,
    [gameCard, gameCard, gameCard, gameCard],
    "homepage-gamesDiv",
    ["flex-wrap"]
  );

  const manuDiv = new Div(DIV, COLUMN, BETWEEN, [], "homepage-menuDiv");

  return new HomePage(header, gamesDiv, manuDiv);
}
