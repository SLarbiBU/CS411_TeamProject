import { Component, OnInit } from '@angular/core';
import {UberService} from "../../Services/uber-service.service";

@Component({
  selector: 'app-uber',
  templateUrl: './uber.component.html',
  styleUrls: ['./uber.component.css']
})
export class UberComponent implements OnInit {

  constructor(private uberService: UberService) { }


  // startLongitude: string = "4.91316489999997";
  // startLatitude: string = "52.352276";

  Estimates: any;
  uberData: any;

  Address: string = "22 Knoll Lane";
  City: string = "Glen Head";
  State: string = "NY";
  Zip_Code: string = "11545";

  endLongitude: string = "-73.694143";
  endLatitude: string = "40.84100560688397";

  public UberEstimates(){

    this.uberService.getUberEstimates(this.Address, this.City, this.State, this.Zip_Code, this.endLatitude, this.endLongitude).subscribe(uberData => {
      this.uberData = uberData;
      this.Estimates = this.uberData.prices[0].estimate;
    })
  }
  ngOnInit() { this.UberEstimates()
  }





}
