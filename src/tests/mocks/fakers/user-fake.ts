import { User } from "../../../domain/user";
export function makeFakeUser(): User {
  return {
    id: "2uhrx82mrhx9m82ux9j5g54",
    name: "Fake_name",
    email: "Fake_email",
    cpf: "12345678910",
    password: "32xy287rywe8qy382rgq78",
    isAdmin: true,
    profiles: [],
    createdAt: "2023/02/04",
    updatedAt: "2023/02/04",
  };
}
