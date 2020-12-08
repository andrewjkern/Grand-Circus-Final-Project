import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from '../Services/service.service';
import { HttpClient } from '@angular/common/http';

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
temperature;
windSpeed = ""
waveHeight = ""
forecast = ""
safeSwim = ""
safeKayak =""
safeBoat = ""
safetyRating: boolean = false;

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
  if(event.NWSForecast.temperature[0] <= 75){
    this.safeSwim = "Not Safe"
  }else{
    this.safeSwim = "Safe"
  }  
  if(event.NWSForecast.temperature[0] <= 60){
    this.safeKayak = "Not Safe"
  }else{
    this.safeKayak = "Safe"
  }
  if(event.NWSForecast.temperature[0] <= 50){
    this.safeBoat = "Not Safe"
  }else{
    this.safeBoat = "Safe"
  }
}

}
