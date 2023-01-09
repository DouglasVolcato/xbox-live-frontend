import { mockedProfile } from "../../../infra/mocks/profile";
import { mockedUser } from "../../../infra/mocks/user";
import { Div } from "../../../presentation/components/div";
import { Header } from "../../../presentation/components/header";
import { Image } from "../../../presentation/components/image";
import { Paragraph } from "../../../presentation/components/paragraph";
import { DivTypeEnum } from "../../../presentation/enums/div/div-type-enum";
import { FlexDirectionEnum } from "../../../presentation/enums/div/flex-direction-enum";
import { FlexJustificationEnum } from "../../../presentation/enums/div/flex-justification-enum";

const { DIV } = DivTypeEnum;
const { ROW } = FlexDirectionEnum;
const { EVENLY } = FlexJustificationEnum;

export function makeHeaderFactory(): Header {
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

  const clock = new Paragraph("0", "homepage-header-clockDiv-clock", [
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

  return new Header([userInfo, clockDiv], "homepage-header");
}
