import { Component, OnInit } from '@angular/core';
import {UserService} from "./Services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  constructor(private userService: UserService){}

  ngOnInit(){
    //this.userService.saveUsername('mwcote97');
  }
}

