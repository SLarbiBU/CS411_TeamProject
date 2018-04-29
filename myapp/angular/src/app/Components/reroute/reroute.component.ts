import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {UserService} from "../../Services/user.service";
import {Router} from "@angular/router";
import {User} from "../../User";

@Component({
  selector: 'app-reroute',
  templateUrl: './reroute.component.html',
  styleUrls: ['./reroute.component.css']
})
export class RerouteComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute,
              private userService: UserService) { }

  sub: any;
  username: string;
  user: User;

  isConcert: boolean;
  isGames: boolean;
  isBars: boolean;
  isFood: boolean;
  isOutdoor: boolean;
  isParties: boolean;

  interestsArray: [String] = [""];

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.username = params['username'];
      //console.log(this.username);
      this.userService.saveUsername(this.username);
      this.userService.getUserByUsername(this.username).subscribe(user => {
        this.user = user;
        console.log(this.user);
        if (this.user.updated){
          this.router.navigate(['body']);
        }
      })
  });
};

public updateUser(){
  if (this.isConcert){
    this.interestsArray.push("Concert");
  }
  if (this.isGames){
    this.interestsArray.push("Game");
  }
  if (this.isBars){
    this.interestsArray.push("Bar");
  }
  if (this.isFood){
    this.interestsArray.push("Food");
  }
  if (this.isOutdoor){
    this.interestsArray.push("Outdoor");
  }
  if (this.isParties){
    this.interestsArray.push("Party");
  }

  if (this.interestsArray.length > 1){
    var index = this.interestsArray.indexOf("");
    if (index > -1) {
      this.interestsArray.splice(index, 1);
    }
  }

  this.user.interests = this.interestsArray;
  this.user.updated = true;

  this.userService.updateUser(this.user).subscribe(user => {
    this.router.navigate(['body']);
  })

}

};
