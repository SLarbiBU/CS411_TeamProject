import { Component, OnInit } from '@angular/core';

import {Router} from "@angular/router";

@Component({
  selector: 'app-event-search',
  templateUrl: './event-search.component.html',
  styleUrls: ['./event-search.component.css']
})
export class EventSearchComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  public goSearch() {
    this.router.navigate(['resultEvent']);
  }

}
