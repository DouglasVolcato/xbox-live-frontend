export class ProfileHandler {
  public storeProfile(profileId: string): void {
    localStorage.setItem("selectedProfileId", profileId);
  }

  public removeProfile(): void {
    localStorage.removeItem("selectedProfileId");
  }

  public getProfile(): string {
    return localStorage.getItem("selectedProfileId") || "";
  }
}
