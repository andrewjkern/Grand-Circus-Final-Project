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

  currentWeather = (): any => {
    return this.httpClient.get(`https://api.openweathermap.org/data/2.5/forecast?zip=48350&appid=392f6048b43be686e36404f5b294ec59` );
  };
  createUser = (user): any =>{
    return this.httpClient.post("http://localhost:3000/create",user)
  }
getBuoys () : any{
return this.httpClient.get("https://glbuoys.glos.us/static/Buoy_tool/data/meta_english.json")
}
  practiceGlos = (): any => {
    return this.httpClient.get(`http://data.glos.us/erddap/tabledap/45013.json?&time%3E=2020-10-21T00%3A00%3A00Z&time%3C=2020-10-28T21%3A30%3A00Z` );
  };

  averageDailyWaterTemp = (): any => {
    return this.httpClient.get(`https://coastwatch.glerl.noaa.gov/erddap/tabledap/glsea-avgtemps2.json?Year%2CDay%2CSup%2CMich%2CHuron%2CErie%2COnt%2CSt_Clr&Year%3E=2015`);
  };

}




// `pro.openweathermap.org/data/2.5/forecast/hourly?zip=${this.userInput}&appid=17c2dcbf565359f7101c4ad856a515d4`
// return this.http.get(`http://openweathermap.org/data/2.5/forecast/hourly?lat=`+lat`&lon=`+lon`&appid=392f6048b43be686e36404f5b294ec59`);