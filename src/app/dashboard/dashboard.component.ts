import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from '../Services/service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  zoom = 12
  center: google.maps.LatLngLiteral
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  }
  constructor(private buoyService: ServiceService) {}

  buoyArray: any[] = [];

  @Input() buoyInfo;

  ngOnInit(): void {
    this.buoyService.getBuoyData().subscribe((result: any) => {
      console.log('result', result);
    });
    this.buoyService.currentWeather().subscribe((result: any) => {
      console.log('result', result);
    });
    this.buoyService.practiceGlos().subscribe((result: any) => {
      console.log('result', result);
    });
  }


}
