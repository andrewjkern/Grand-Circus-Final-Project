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
temperature = ""
windSpeed = ""
waveHeight = ""
  // zoom = 12
  // center: google.maps.LatLngLiteral
  // options: google.maps.MapOptions = {
  //   mapTypeId: 'hybrid',
  //   zoomControl: false,
  //   scrollwheel: false,
  //   disableDoubleClickZoom: true,
  //   maxZoom: 15,
  //   minZoom: 8,
  // }
 

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
  this.windSpeed=event.NWSForecast.windspeed[0]
  this.waveHeight=event.NWSForecast.waveheight[0]
}

}
