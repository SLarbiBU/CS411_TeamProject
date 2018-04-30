import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Event} from '../Event';
import { Observable } from 'rxjs/Observable';
import {User} from "../User";

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  public saveUsername(username: string){
    localStorage.setItem("username", username);
  }

  public getUsername(): string {
    return localStorage.getItem("username");
  }

  public getUserByUsername(username: string){
    return this.http.get<User>("http://localhost:3000/users/getUserByUsername/" + username);
  }

  public updateUser(user: User){
    return this.http.put<User>("http://localhost:3000/users/updateUser", user);
  }

  public deleteUser(username: string){
    return this.http.delete<User>("http://localhost:3000/users/deleteUser/" + username);
  }

}
