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

  @Input() endLongitude: string;// = "-73.694143";
  @Input() endLatitude: string;// = "40.84100560688397";

  // startLongitude: string = "4.91316489999997";
  // startLatitude: string = "52.352276";

  Estimates: any;
  uberData: any;

  // Address: string = "22 Knoll Lane";
  // City: string = "Glen Head";
  // State: string = "NY";
  // Zip_Code: string = "11545";

  Address: string = "700 Commonwealth Avenue";
  City: string = "Boston";
  State: string = "MA";
  Zip_Code: string = "02215";

  username: string;
  user: User = null;

  // @Input() Address: string;
  // @Input() City: string;
  // @Input() State: string;
  // @Input() Zip_Code: string;

  // Address: string = User.address;
  // City: string = User[0].city;
  // State: string = User[0].state;
  // Zip_Code: string = User[0].zipcode;

  
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
    });
    this.UberEstimates();
  }
}


