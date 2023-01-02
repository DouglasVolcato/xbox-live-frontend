import { Game } from "./game";

export type Profile = {
  id: string;
  title: string;
  imageUrl: string;
  favoriteGames: string[];
  userId: string;
  createdAt: string;
  updatedAt: string;
  Games: Game[];
};
