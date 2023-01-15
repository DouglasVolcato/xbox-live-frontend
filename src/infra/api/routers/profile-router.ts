import { ApiConection } from "../connection/apiConnection";
import { ApiResponse } from "../dtos/apiResponse-dto";
import { TokenHandler } from "../../helpers/tokenHandler-helper";
import { ProfileDto } from "../dtos/profile-dto";
import { Profile } from "../../../domain/profile";
import { HttpRequestAdapter } from "../../../main/adapters/httpRequest-adapter";

export class ProfileRouter extends ApiConection {
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

  public async create(profile: ProfileDto): Promise<ApiResponse<Profile>> {
    return await this.httpRequestAdapter.post(
      this.apiLink + "/profile/create-profile",
      profile,
      this.tokenHandler.getAuthorization()
    );
  }

  public async getAll(): Promise<ApiResponse<Profile[]>> {
    return await this.httpRequestAdapter.get(
      this.apiLink + "/profile/get-all-profiles",
      this.tokenHandler.getAuthorization()
    );
  }

  public async getById(profileId: string): Promise<ApiResponse<Profile>> {
    return await this.httpRequestAdapter.get(
      this.apiLink + "/profile/get-profile/" + profileId,
      this.tokenHandler.getAuthorization()
    );
  }

  public async delete(profileId: string): Promise<ApiResponse<Profile>> {
    return await this.httpRequestAdapter.delete(
      this.apiLink + "/profile/delete-profile/" + profileId,
      this.tokenHandler.getAuthorization()
    );
  }

  public async update(
    profileId: string,
    profile: ProfileDto
  ): Promise<ApiResponse<Profile>> {
    return await this.httpRequestAdapter.patch(
      this.apiLink + "/profile/update-profile/" + profileId,
      profile,
      this.tokenHandler.getAuthorization()
    );
  }

  public async addGames(
    profileId: string,
    gameIdList: string[]
  ): Promise<ApiResponse<Profile>> {
    return await this.httpRequestAdapter.patch(
      this.apiLink + "/profile/add-games-profile/" + profileId,
      {
        favoriteGames: gameIdList,
      },
      this.tokenHandler.getAuthorization()
    );
  }

  public async removeGames(
    profileId: string,
    gameIdList: string[]
  ): Promise<ApiResponse<Profile>> {
    return await this.httpRequestAdapter.patch(
      this.apiLink + "/profile/remove-games-profile/" + profileId,
      {
        favoriteGames: gameIdList,
      },
      this.tokenHandler.getAuthorization()
    );
  }
}
