import { User } from "../../../domain/user";
import { ApiConnection } from "../connection/apiConnection";
import { ApiResponse } from "../dtos/apiResponse-dto";
import { UserDto } from "../dtos/user-dto";
import { TokenHandler } from "../../helpers/tokenHandler-helper";
import { HttpRequestAdapter } from "../../../main/adapters/httpRequest-adapter";

export class UserRouter extends ApiConnection {
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

  public async create(user: UserDto): Promise<ApiResponse<User>> {
    return await this.httpRequestAdapter.post(
      this.apiLink + "/user/create-user",
      user,
      this.tokenHandler.getAuthorization()
    );
  }

  public async getAll(): Promise<ApiResponse<User[]>> {
    return await this.httpRequestAdapter.get(
      this.apiLink + "/user/get-all-users",
      this.tokenHandler.getAuthorization()
    );
  }

  public async getById(userId: string): Promise<ApiResponse<User>> {
    return await this.httpRequestAdapter.get(
      this.apiLink + "/user/get-user-by-id/" + userId,
      this.tokenHandler.getAuthorization()
    );
  }

  public async getByEmail(userEmail: string): Promise<ApiResponse<User>> {
    return await this.httpRequestAdapter.get(
      this.apiLink + "/user/get-user-by-email/" + userEmail,
      this.tokenHandler.getAuthorization()
    );
  }

  public async delete(userId: string): Promise<ApiResponse<User>> {
    return await this.httpRequestAdapter.delete(
      this.apiLink + "/user/delete-user/" + userId,
      this.tokenHandler.getAuthorization()
    );
  }

  public async update(
    userId: string,
    user: UserDto
  ): Promise<ApiResponse<User>> {
    return await this.httpRequestAdapter.patch(
      this.apiLink + "/user/update-user/" + userId,
      user,
      this.tokenHandler.getAuthorization()
    );
  }
}
