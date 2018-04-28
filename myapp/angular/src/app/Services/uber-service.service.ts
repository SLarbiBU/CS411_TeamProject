import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UberService {

  constructor(private http: HttpClient) { }

  getUberEstimates(Address, City, State, Zip_Code, elat, elong){
    return this.http.get("http://localhost:3000/uber/estimates/" + Address + "/" + City + "/" + State + "/" + Zip_Code + "/" + elat + "/" + elong);
  }





}
