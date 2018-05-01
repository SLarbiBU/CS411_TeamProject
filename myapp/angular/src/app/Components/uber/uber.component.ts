import { Component, OnInit, Input } from '@angular/core';
import {UberService} from "../../Services/uber-service.service";
import {User} from "../../User";
import {UserService} from "../../Services/user.service";

@Component({
  selector: 'app-uber',
  templateUrl: './uber.component.html',
  styleUrls: ['./uber.component.css']
})
export class UberComponent implements OnInit {

  constructor(private uberService: UberService,
              private userService: UserService) {
  }

  @Input() endLongitude: string;
  @Input() endLatitude: string;



  Estimates: any;
  uberData: any;





  username: string;
  user: User = null;



  Address: String;
  City: String;
  State: String;
  Zip_Code: String;

  
  truthValue = false;

  public UberEstimates() {
    console.log(this.endLongitude);
    this.uberService.getUberEstimates(this.Address, this.City, this.State, this.Zip_Code, this.endLatitude, this.endLongitude).subscribe(uberData => {
      this.uberData = uberData;
      if ((Object.keys(this.uberData)[0]) == "fields") {
        if (this.uberData.fields.start_longitude == "Distance between two points exceeds 100 miles" || this.uberData.prices[0].estimate == "" || this.uberData.prices[0].estimate == [] || this.uberData.prices[0].estimate == undefined || (this.City == undefined && this.State == undefined)) {
          this.Estimates = "No Uber Estimates Available! Try another address."
        }
      }


      else {
        this.Estimates = this.uberData.prices[0].estimate;
      }
      this.truthValue = true;


    });
  };

  public refresh() {
    this.Address = "";
    this.City = "";
    this.State = "";
    this.Zip_Code = "";
    this.Estimates = "";
    this.truthValue = false;

  }


ngOnInit() {
    this.username = this.userService.getUsername();
    this.userService.getUserByUsername(this.username).subscribe(user => {
      this.user = user;
      this.Address = this.user.address;
      this.City = this.user.city;
      this.State = this.user.state;
      this.Zip_Code = this.user.zipcode;
      this.UberEstimates();
    });

  }
}


