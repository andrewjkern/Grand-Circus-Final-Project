import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpClient: HttpClient) { }

  public $getGLOSAPI = new Subject<any>();

  //Get buoy to return data
  getBuoyData = (): any => {
    let buoyUrl =
    'https://glbuoys.glos.us/static/Buoy_tool/data/meta_english.json';
    return this.httpClient.get<any>(buoyUrl);
  };
  currentWeather = (): any => {
    return this.httpClient.get(`https://api.openweathermap.org/data/2.5/forecast?zip=48350&appid=392f6048b43be686e36404f5b294ec59` );
  };
  createUser = (user): any =>{
    return this.httpClient.post("http://localhost:3000/create",user)
  }
}




// `pro.openweathermap.org/data/2.5/forecast/hourly?zip=${this.userInput}&appid=17c2dcbf565359f7101c4ad856a515d4`
// return this.http.get(`http://openweathermap.org/data/2.5/forecast/hourly?lat=`+lat`&lon=`+lon`&appid=392f6048b43be686e36404f5b294ec59`);