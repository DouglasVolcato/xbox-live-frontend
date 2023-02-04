import { ApiConnection } from "../connection/apiConnection";
import { ApiResponse } from "../dtos/apiResponse-dto";
import { Game } from "../../../domain/game";
import { GameDto } from "../dtos/game-dto";
import { HttpRequestAdapter } from "../../../helpers/adapters/httpRequest-adapter";

export class GameRouter {
  private readonly httpRequestAdapter: HttpRequestAdapter;
  private readonly apiConnection: ApiConnection;

  constructor(
    httpRequestAdapter: HttpRequestAdapter,
    apiConnection: ApiConnection
  ) {
    this.httpRequestAdapter = httpRequestAdapter;
    this.apiConnection = apiConnection;
  }

  public async create(
    game: GameDto,
    authorizationToken: string
  ): Promise<ApiResponse<Game>> {
    const apiLink = this.apiConnection.getLink();
    return await this.httpRequestAdapter.post(
      apiLink + "/game/create-game",
      game,
      authorizationToken
    );
  }

  public async getAll(
    authorizationToken: string
  ): Promise<ApiResponse<Game[]>> {
    const apiLink = this.apiConnection.getLink();
    return await this.httpRequestAdapter.get(
      apiLink + "/game/get-all-games",
      authorizationToken
    );
  }

  public async getById(
    gameId: string,
    authorizationToken: string
  ): Promise<ApiResponse<Game>> {
    const apiLink = this.apiConnection.getLink();
    return await this.httpRequestAdapter.get(
      apiLink + "/game/get-game/" + gameId,
      authorizationToken
    );
  }

  public async delete(
    gameId: string,
    authorizationToken: string
  ): Promise<ApiResponse<Game>> {
    const apiLink = this.apiConnection.getLink();
    return await this.httpRequestAdapter.delete(
      apiLink + "/game/delete-game/" + gameId,
      authorizationToken
    );
  }

  public async update(
    gameId: string,
    game: GameDto,
    authorizationToken: string
  ): Promise<ApiResponse<Game>> {
    const apiLink = this.apiConnection.getLink();
    return await this.httpRequestAdapter.patch(
      apiLink + "/game/update-game/" + gameId,
      game,
      authorizationToken
    );
  }
}
