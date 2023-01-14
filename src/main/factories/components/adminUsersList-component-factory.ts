import { mockedUser } from "../../../infra/mocks/user";
import { Div } from "../../../presentation/components/div";
import { Paragraph } from "../../../presentation/components/paragraph";
import { DivTypeEnum } from "../../../presentation/enums/div/div-type-enum";
import { FlexDirectionEnum } from "../../../presentation/enums/div/flex-direction-enum";
import { FlexJustificationEnum } from "../../../presentation/enums/div/flex-justification-enum";

export function makeAdminUsersListFactory(): Div {
  const userId = new Paragraph(
    "ID: " + mockedUser.id,
    "adminUsersList-usersDiv-userCard-userTitle",
    ["background-dark-blue"]
  );
  const userName = new Paragraph(
    "Name: " + mockedUser.name,
    "adminUsersList-usersDiv-userCard-userTitle",
    ["background-dark-blue"]
  );
  const userCard = new Div(
    DivTypeEnum.DIV,
    FlexDirectionEnum.COLUMN,
    FlexJustificationEnum.EVENLY,
    [userId, userName],
    "adminUsersList-usersDiv-userCard",
    ["background-dark-blue", "border-light-gray", "userCard"]
  );

  return new Div(
    DivTypeEnum.DIV,
    FlexDirectionEnum.ROW,
    FlexJustificationEnum.EVENLY,
    [userCard, userCard, userCard, userCard],
    "adminUsersList-usersDiv",
    ["flex-wrap"]
  );
}
