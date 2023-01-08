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
import { Button } from "../../presentation/components/button";
import { ButtonTypeEnum } from "../../presentation/enums/button/button-type-enum";

const { DIV } = DivTypeEnum;
const { COLUMN, ROW } = FlexDirectionEnum;
const { EVENLY } = FlexJustificationEnum;
const { BUTTON } = ButtonTypeEnum;

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

  const favoriteGamesButton = new Button(
    "Favorite Games",
    BUTTON,
    "homepage-menuDiv-favoriteGames",
    ["menuButton"]
  );

  const topImdbGamesButton = new Button(
    "Top IMDBs",
    BUTTON,
    "homepage-menuDiv-topImdbGames",
    ["menuButton"]
  );

  const gameCategoriesButton = new Button(
    "Categories",
    BUTTON,
    "homepage-menuDiv-gameCategories",
    ["menuButton"]
  );

  const menuDiv = new Div(
    DIV,
    ROW,
    EVENLY,
    [favoriteGamesButton, topImdbGamesButton, gameCategoriesButton],
    "homepage-menuDiv"
  );

  return new HomePage(header, gamesDiv, menuDiv);
}
