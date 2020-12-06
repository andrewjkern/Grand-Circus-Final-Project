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

  buoyArray: any[] = [];

  @Input() buoyInfo;

  ngOnInit(): void {
    this.buoyService.getBuoyData().subscribe((result: any) => {
      console.log('result', result);
    });
    this.buoyService.currentWeather().subscribe((result: any) => {
      console.log('result', result);
    });
    this.httpClient.get(`http://localhost:3000/user/${localStorage.getItem('password')}`).subscribe((result: any) =>{
      console.log("User Info", result);
      this.user = result.data[0]
    })
  }


}
