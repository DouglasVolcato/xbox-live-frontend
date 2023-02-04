import { ApiConnection } from "../connection/apiConnection";
import { ApiResponse } from "../dtos/apiResponse-dto";
import { ProfileDto } from "../dtos/profile-dto";
import { Profile } from "../../../domain/profile";
import { HttpRequestAdapter } from "../../../helpers/adapters/httpRequest-adapter";

export class ProfileRouter {
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
    profile: ProfileDto,
    authorizationToken: string
  ): Promise<ApiResponse<Profile>> {
    const apiLink = this.apiConnection.getLink();
    return await this.httpRequestAdapter.post(
      apiLink + "/profile/create-profile",
      profile,
      authorizationToken
    );
  }

  public async getAll(
    authorizationToken: string
  ): Promise<ApiResponse<Profile[]>> {
    const apiLink = this.apiConnection.getLink();
    return await this.httpRequestAdapter.get(
      apiLink + "/profile/get-all-profiles",
      authorizationToken
    );
  }

  public async getById(
    profileId: string,
    authorizationToken: string
  ): Promise<ApiResponse<Profile>> {
    const apiLink = this.apiConnection.getLink();
    return await this.httpRequestAdapter.get(
      apiLink + "/profile/get-profile/" + profileId,
      authorizationToken
    );
  }

  public async delete(
    profileId: string,
    authorizationToken: string
  ): Promise<ApiResponse<Profile>> {
    const apiLink = this.apiConnection.getLink();
    return await this.httpRequestAdapter.delete(
      apiLink + "/profile/delete-profile/" + profileId,
      authorizationToken
    );
  }

  public async update(
    profileId: string,
    profile: ProfileDto,
    authorizationToken: string
  ): Promise<ApiResponse<Profile>> {
    const apiLink = this.apiConnection.getLink();
    return await this.httpRequestAdapter.patch(
      apiLink + "/profile/update-profile/" + profileId,
      profile,
      authorizationToken
    );
  }

  public async addGames(
    profileId: string,
    gameIdList: string[],
    authorizationToken: string
  ): Promise<ApiResponse<Profile>> {
    const apiLink = this.apiConnection.getLink();
    return await this.httpRequestAdapter.patch(
      apiLink + "/profile/add-games-profile/" + profileId,
      {
        favoriteGames: gameIdList,
      },
      authorizationToken
    );
  }

  public async removeGames(
    profileId: string,
    gameIdList: string[],
    authorizationToken: string
  ): Promise<ApiResponse<Profile>> {
    const apiLink = this.apiConnection.getLink();
    return await this.httpRequestAdapter.patch(
      apiLink + "/profile/remove-games-profile/" + profileId,
      {
        favoriteGames: gameIdList,
      },
      authorizationToken
    );
  }
}
