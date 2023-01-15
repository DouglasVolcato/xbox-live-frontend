import { mockedUser } from "../../../infra/mocks/user";
import { Button } from "../../../presentation/components/button";
import { Div } from "../../../presentation/components/div";
import { Input } from "../../../presentation/components/input";
import { Label } from "../../../presentation/components/label";
import { Title } from "../../../presentation/components/title";
import { ButtonTypeEnum } from "../../../presentation/enums/button/button-type-enum";
import { DivTypeEnum } from "../../../presentation/enums/div/div-type-enum";
import { FlexDirectionEnum } from "../../../presentation/enums/div/flex-direction-enum";
import { FlexJustificationEnum } from "../../../presentation/enums/div/flex-justification-enum";
import { InputTypeEnum } from "../../../presentation/enums/input/input-type-enum";

export function makeUserEditionAdminFormFactory(): Div {
  const formTitle = new Title("My account", "userEditionAdminForm-title");

  const nameLabel = new Label("Name", "userAccountForm-nameLabel");
  const nameInput = new Input(
    InputTypeEnum.TEXT,
    mockedUser.name,
    "userEditionAdminForm-nameInput",
    "Name"
  );

  const emailLabel = new Label("Email", "userAccountForm-emailLabel");
  const emailInput = new Input(
    InputTypeEnum.EMAIL,
    mockedUser.email,
    "userEditionAdminForm-emailInput",
    "Email"
  );

  const passwordLabel = new Label("Password", "userAccountForm-passwordLabel");
  const passwordInput = new Input(
    InputTypeEnum.PASSWORD,
    mockedUser.password,
    "userEditionAdminForm-passwordInput",
    "Password"
  );

  const cpfLabel = new Label("CPF", "userAccountForm-cpfLabel");
  const cpfInput = new Input(
    InputTypeEnum.TEXT,
    mockedUser.cpf,
    "userEditionAdminForm-cpfInput",
    "CPF"
  );

  const updateButton = new Button(
    "Update",
    ButtonTypeEnum.BUTTON,
    "userEditionAdminForm-buttonsDiv-updateButton",
    ["border-light-green", "background-dark-green"]
  );
  const deleteButton = new Button(
    "Delete",
    ButtonTypeEnum.BUTTON,
    "userEditionAdminForm-buttonsDiv-deleteButton",
    ["border-light-red", "background-dark-red"]
  );

  const buttonsDiv = new Div(
    DivTypeEnum.DIV,
    FlexDirectionEnum.ROW,
    FlexJustificationEnum.EVENLY,
    [updateButton, deleteButton],
    "userEditionAdminForm-buttonsDiv"
  );

  return new Div(
    DivTypeEnum.FORM,
    FlexDirectionEnum.COLUMN,
    FlexJustificationEnum.EVENLY,
    [
      formTitle,
      nameLabel,
      nameInput,
      emailLabel,
      emailInput,
      passwordLabel,
      passwordInput,
      cpfLabel,
      cpfInput,
      buttonsDiv,
    ],
    "userEditionAdminForm",
    ["form"]
  );
}
