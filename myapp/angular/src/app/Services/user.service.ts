import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }

  public saveUsername(username: string){
    localStorage.setItem("username", username);
  }

  public getUsername(): string {
    return localStorage.getItem("username");
  }

}
