export class ApiConnection {
  private readonly apiLink: string;

  constructor(link: string) {
    this.apiLink = link;
  }

  public getLink(): string {
    return this.apiLink;
  }
}
