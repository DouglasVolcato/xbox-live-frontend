export class ApiConnection {
  private readonly apiLink: string;

  constructor(link?: string) {
    this.apiLink = link ? link : "http://localhost:3000";
  }

  public getLink(): string {
    return this.apiLink;
  }
}
