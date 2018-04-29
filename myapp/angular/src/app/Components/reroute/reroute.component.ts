import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {UserService} from "../../Services/user.service";
import {Router} from "@angular/router";

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

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.username = params['username'];
      console.log(this.username);
      this.userService.saveUsername(this.username);
      this.router.navigate(['body']);
  });
};

};
