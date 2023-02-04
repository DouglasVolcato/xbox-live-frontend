import { ApiConnection } from "../connection/apiConnection";
import { ApiResponse } from "../dtos/apiResponse-dto";
import { TokenDto } from "../dtos/token-dto";
import { LoginDto } from "../dtos/login-dto";
import { HttpRequestAdapter } from "../../../helpers/adapters/httpRequest-adapter";

export class AuthRouter {
  private readonly httpRequestAdapter: HttpRequestAdapter;
  private readonly apiConnection: ApiConnection;

  constructor(
    httpRequestAdapter: HttpRequestAdapter,
    apiConnection: ApiConnection
  ) {
    this.httpRequestAdapter = httpRequestAdapter;
    this.apiConnection = apiConnection;
  }

  public async login(loginData: LoginDto): Promise<ApiResponse<TokenDto>> {
    const apiLink = this.apiConnection.getLink();
    return await this.httpRequestAdapter.post(
      apiLink + "/auth/login",
      loginData
    );
  }
}
