import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from '../Services/service.service';
import { HttpClient } from '@angular/common/http';
import {GoogleMap} from '@angular/google-maps';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
user: any;
  constructor(private buoyService: ServiceService, private httpClient: HttpClient) {}

glosapi;
date = ""
temperature = "";
windSpeed = ""
waveHeight = ""
forecast = ""
safeSwim = ""
safeKayak =""
safeBoat = ""
isSafe: boolean = true;
kayakSafeIcon = "";
swimSafeIcon = "";
safeBoatIcon = "";
hideIcon = false;
buoyID;
mostRecentTime;
showBuoy = false;

  buoyArray: any[] = [];

  // @Input() buoyInfo;
  buoyTemp: number;
  ngOnInit(): void {

    this.buoyService.currentWeather().subscribe((result: any) => {
      console.log('result', result);
    });
    this.buoyService.practiceGlos().subscribe((result: any) => {
      console.log('result', result);
      this.glosapi = result;
    }, (err) => {
      console.log('Error applying the glosapi call ngmodel')
    });
    this.httpClient.get(`http://localhost:3000/user/${localStorage.getItem('password')}`).subscribe((result: any) =>{
      console.log("User Info", result);
      this.user = result.data[0]
    })
  }
handleClick(event) {
  console.log(event)
  this.temperature=event.NWSForecast.temperature[0]
  this.forecast=event.NWSForecast.title[0]
  this.windSpeed=event.NWSForecast.windspeed[0]
  this.waveHeight=event.NWSForecast.waveheight[0]
  this.buoyID=event.id;
  this.mostRecentTime=event.updateTime;
  if(event.NWSForecast.temperature[0] <= this.user.swim_minair){
    this.safeSwim = "Based on your preferences, it may be too cold to go swimming."
    this.swimSafeIcon = "/assets/exclamation-circle-solid.svg";

  }else{
    this.safeSwim = "This is a great temperature to go swimming!";
    this.swimSafeIcon = "/assets/check-solid.svg"
    this.hideIcon = true;
  }  
  if(event.NWSForecast.temperature[0] <= this.user.kayak_minair){
    this.safeKayak = "Based on your preferences, it may not be safe to go kayaking at this time."
    this.kayakSafeIcon = "/assets/exclamation-circle-solid.svg";
    this.hideIcon = true;
  }else{
    this.safeKayak = "This is a great temperature to go kayaking!"
    this.kayakSafeIcon = "/assets/check-solid.svg";
    this.hideIcon = true;
  }
  if(event.NWSForecast.temperature[0] <= this.user.boat_minair){
    this.safeBoat = "Based on your preferences, it may not be a good day to go boating."
    this.safeBoatIcon = "/assets/exclamation-circle-solid.svg";
    this.hideIcon = true;
  }else{
    this.safeBoat = "This is a great temperature to take your boat out!";
    this.safeBoatIcon = "/assets/check-solid.svg";
    this.hideIcon = true;
  }
  this.showBuoy = true;
}

}
