import { Profile } from "../../domain/profile";
import { mockedGame } from "./game";

export const mockedProfile: Profile = {
  id: "12r14tr243td34",
  title: "Doug",
  imageUrl:
    "https://images.pexels.com/photos/9382438/pexels-photo-9382438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  userId: "38dfger3278dgdfg2348dfg47",
  createdAt: "2023-01-02",
  updatedAt: "2023-01-02",
  favoriteGames: ["234d234123d15d1"],
  Games: [mockedGame],
};
