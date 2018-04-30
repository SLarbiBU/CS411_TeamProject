import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {UserService} from "../../Services/user.service";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private userService: UserService) { }

  title = 'The Event Selection App';
  sub: any;
  username: string;

  ngOnInit() {
  
  }
  

}
