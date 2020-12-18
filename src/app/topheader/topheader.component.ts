import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-topheader',
  templateUrl: './topheader.component.html',
  styleUrls: ['./topheader.component.css']
})
export class TopheaderComponent implements OnInit {
user: any;
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    
    this.httpClient.get(`https://myglos.herokuapp.com/user/${localStorage.getItem('password')}`).subscribe((result: any) =>{
    console.log("User Info", result);
    this.user = result.data[0]
    })

}}
