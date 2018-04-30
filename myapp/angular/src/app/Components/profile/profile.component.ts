import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {UserService} from "../../Services/user.service";
import {Router} from "@angular/router";
import {User} from "../../User";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute,
    private userService: UserService) { }

  user: User;
  username: string;

  ngOnInit() {
    this.username = this.userService.getUsername();
    this.userService.getUserByUsername(this.username).subscribe(user => {
      this.user = user;
    })
  }

  public deleteUser(){
    this.userService.deleteUser(this.username).subscribe(user => {
      console.log("User deleted");
    })
  }

}
