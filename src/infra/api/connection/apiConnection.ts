import { apiLink } from "./apiLink";

export class ApiConnection {
  private readonly apiLink: string;

  constructor(link?: string) {
    this.apiLink = link ? link : apiLink;
  }

  public getLink(): string {
    return this.apiLink;
  }
}
