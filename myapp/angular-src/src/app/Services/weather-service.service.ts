import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class WeatherService {

  constructor(private http: HttpClient) { }


  getCurrentWeather(city){
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'Content-Type':  'application/json'
      })
    };

    return this.http.get("http://localhost:3000/weather/current/" + city);
  }

}
/*
import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import "rxjs/add/operator/map";


@Injectable()
export class WeatherService {

  constructor(private http: Http) { }


  getCurrentWeather(city){
    let headers = new Headers();
    return this.http.get("localhost:3000/weather/current/" + city, {headers: headers}).map(res => res.json());
  }

}*/