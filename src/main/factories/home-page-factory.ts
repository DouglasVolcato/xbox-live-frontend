import { mockedGame } from "../../infra/mocks/game";
import { HomePage } from "../../presentation/pages/home-page";
import { Div } from "../../presentation/components/div";
import { Header } from "../../presentation/components/header";
import { Image } from "../../presentation/components/image";
import { Paragraph } from "../../presentation/components/paragraph";
import { DivTypeEnum } from "../../presentation/enums/div/div-type-enum";
import { FlexDirectionEnum } from "../../presentation/enums/div/flex-direction-enum";
import { FlexJustificationEnum } from "../../presentation/enums/div/flex-justification-enum";
import { mockedUser } from "../../infra/mocks/user";
import { mockedProfile } from "../../infra/mocks/profile";

const { DIV } = DivTypeEnum;
const { COLUMN, ROW } = FlexDirectionEnum;
const { BETWEEN, EVENLY } = FlexJustificationEnum;

export function makeHomePageFactory(): HomePage {
  const userName = new Paragraph(
    mockedUser.name,
    "homepage-header-userInfo-userName",
    ["profileName"]
  );
  const userImage = new Image(
    "User",
    mockedProfile.imageUrl,
    "homepage-header-userInfo-userImage",
    ["profileImage"]
  );
  const userInfo = new Div(
    DIV,
    ROW,
    EVENLY,
    [userImage, userName],
    "homepage-header-userInfo"
  );

  const clock = new Paragraph("10:20", "homepage-header-clockDiv-clock", [
    "clock",
  ]);

  const clockDiv = new Div(
    DIV,
    ROW,
    EVENLY,
    [clock],
    "homepage-header-clockDiv",
    ["clockDiv"]
  );

  const header = new Header([userInfo, clockDiv], "homepage-header");

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
