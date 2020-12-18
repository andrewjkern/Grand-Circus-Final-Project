import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import {Router} from '@angular/router'
import { ServiceService } from '../Services/service.service';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  updateForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router,private httpClient: HttpClient, private serviceService: ServiceService) { }

  ngOnInit(): void {   
    this.httpClient.get(`http://https://myglos.herokuapp.com/user/${localStorage.getItem('password')}`).subscribe((result: any) =>{
    console.log("User Info", result);
    this.user = result.data[0];
    this.updateForm.setValue({
      firstname: this.user.firstname,
      lastname: this.user.lastname,
      email: this.user.email,
      kayak_minair: this.user.kayak_minair,
      kayak_minwater: this.user.kayak_minwater,
      kayak_maxwind: this.user.kayak_maxwind,
      kayak_maxwave: this.user.kayak_maxwave,
      swim_minair: this.user.swim_minair,
      swim_minwater: this.user.swim_minwater,
      swim_maxwind: this.user.swim_maxwind,
      swim_maxwave: this.user.swim_maxwave,
      boat_minair: this.user.boat_minair,
      boat_minwater: this.user.boat_minwater,
      boat_maxwind: this.user.boat_maxwind,
      boat_maxwave: this.user.boat_maxwave,
    })

  });

  this.updateForm = this.formBuilder.group({
    firstname: ['', Validators.required,],
    lastname: ['', Validators.required],
    email: ['', Validators.required],
    kayak_minair: ['', Validators.required],
    kayak_minwater: ['', Validators.required],
    kayak_maxwind: ['', Validators.required],
    kayak_maxwave: ['', Validators.required],
    swim_minair: ['', Validators.required],
    swim_minwater: ['', Validators.required],
    swim_maxwind: ['', Validators.required],
    swim_maxwave: ['', Validators.required],
    boat_minair: ['', Validators.required],
    boat_minwater: ['', Validators.required],
    boat_maxwind: ['', Validators.required],
    boat_maxwave: ['', Validators.required],
  }) 
}
onSubmit(){
console.log(this.updateForm.value);
this.serviceService.updateUser(this.updateForm.value).subscribe((res) =>{
  console.log('UPDATED USER', res);
  localStorage.setItem("password",this.user.password);
  this.router.navigateByUrl('/dashboard')
})
}
}

