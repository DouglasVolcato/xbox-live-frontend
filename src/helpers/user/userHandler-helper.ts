export class UserHandler {
  public storeUser(userEmail: string): void {
    localStorage.setItem("loggedUserEmail", userEmail);
  }

  public removeUser(): void {
    localStorage.removeItem("loggedUserEmail");
  }

  public getUser(): string {
    return localStorage.getItem("loggedUserEmail") || "";
  }
}
