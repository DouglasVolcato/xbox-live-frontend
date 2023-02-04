import { User } from "../../../domain/user";
import { ApiConnection } from "../connection/apiConnection";
import { ApiResponse } from "../dtos/apiResponse-dto";
import { UserDto } from "../dtos/user-dto";
import { HttpRequestAdapter } from "../../../helpers/adapters/httpRequest-adapter";

export class UserRouter {
  private readonly httpRequestAdapter: HttpRequestAdapter;
  private readonly apiConnection: ApiConnection;

  constructor(
    httpRequestAdapter: HttpRequestAdapter,
    apiConnection: ApiConnection
  ) {
    this.httpRequestAdapter = httpRequestAdapter;
    this.apiConnection = apiConnection;
  }

  public async getAll(
    authorizationToken: string
  ): Promise<ApiResponse<User[]>> {
    const apiLink = this.apiConnection.getLink();
    return await this.httpRequestAdapter.get(
      apiLink + "/user/get-all-users",
      authorizationToken
    );
  }

  public async getById(
    userId: string,
    authorizationToken: string
  ): Promise<ApiResponse<User>> {
    const apiLink = this.apiConnection.getLink();
    return await this.httpRequestAdapter.get(
      apiLink + "/user/get-user-by-id/" + userId,
      authorizationToken
    );
  }

  public async getByEmail(
    userEmail: string,
    authorizationToken: string
  ): Promise<ApiResponse<User>> {
    const apiLink = this.apiConnection.getLink();
    return await this.httpRequestAdapter.post(
      apiLink + "/user/get-user-by-email",
      {
        email: userEmail,
      },
      authorizationToken
    );
  }

  public async delete(
    userId: string,
    authorizationToken: string
  ): Promise<ApiResponse<User>> {
    const apiLink = this.apiConnection.getLink();
    return await this.httpRequestAdapter.delete(
      apiLink + "/user/delete-user/" + userId,
      authorizationToken
    );
  }

  public async update(
    userId: string,
    user: UserDto,
    authorizationToken: string
  ): Promise<ApiResponse<User>> {
    const apiLink = this.apiConnection.getLink();
    return await this.httpRequestAdapter.patch(
      apiLink + "/user/update-user/" + userId,
      user,
      authorizationToken
    );
  }
}
