import { ApiConection } from "../connection/apiConnection";
import { ApiResponse } from "../dtos/apiResponse-dto";
import { TokenHandler } from "../../helpers/tokenHandler-helper";
import { Game } from "../../../domain/game";
import { GameDto } from "../dtos/game-dto";
import { HttpRequestAdapter } from "../../../helpers/adapters/httpRequest-adapter";

export class GameRouter extends ApiConection {
  private readonly tokenHandler: TokenHandler;
  private readonly httpRequestAdapter: HttpRequestAdapter;

  constructor(
    tokenHandler: TokenHandler,
    httpRequestAdapter: HttpRequestAdapter
  ) {
    super();
    this.tokenHandler = tokenHandler;
    this.httpRequestAdapter = httpRequestAdapter;
  }

  public async create(game: GameDto): Promise<ApiResponse<Game>> {
    return await this.httpRequestAdapter.post(
      this.apiLink + "/game/create-game",
      game,
      this.tokenHandler.getAuthorization()
    );
  }

  public async getAll(): Promise<ApiResponse<Game[]>> {
    return await this.httpRequestAdapter.get(
      this.apiLink + "/game/get-all-games",
      this.tokenHandler.getAuthorization()
    );
  }

  public async getById(gameId: string): Promise<ApiResponse<Game>> {
    return await this.httpRequestAdapter.get(
      this.apiLink + "/game/get-game/" + gameId,
      this.tokenHandler.getAuthorization()
    );
  }

  public async delete(gameId: string): Promise<ApiResponse<Game>> {
    return await this.httpRequestAdapter.delete(
      this.apiLink + "/game/delete-game/" + gameId,
      this.tokenHandler.getAuthorization()
    );
  }

  public async update(
    gameId: string,
    game: GameDto
  ): Promise<ApiResponse<Game>> {
    return await this.httpRequestAdapter.patch(
      this.apiLink + "/game/update-game/" + gameId,
      game,
      this.tokenHandler.getAuthorization()
    );
  }
}
