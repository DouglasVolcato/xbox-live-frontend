import { User } from "../../domain/user";
import { mockedProfile } from "./profile";

export const mockedUser: User = {
  id: "38dfger3278dgdfg2348dfg47",
  name: "Douglas Volcato",
  email: "douglasvolcato@gmail.com",
  password: "SuperPassword2000",
  cpf: "123.456.789-10",
  isAdmin: true,
  createdAt: "2023-01-02",
  updatedAt: "2023-01-02",
  profiles: [mockedProfile],
};
