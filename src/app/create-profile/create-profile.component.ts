import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {ServiceService} from '../Services/service.service'

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {
profileForm: FormGroup
  constructor(private formBuilder: FormBuilder, private router: Router, private http:HttpClient, private serviceService: ServiceService) { }

  ngOnInit(): void {
    
    this.profileForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      optin: [Boolean, Validators.required],
      swims: [Boolean, Validators.required],
      boats: [Boolean, Validators.required],
      kayaks: [Boolean, Validators.required],
  }
  )};


  onSubmit(){
    console.log(this.profileForm.value);
    this.serviceService.createUser(this.profileForm.value).subscribe((res) => {
      console.log('RESPONSE', res);
      localStorage.setItem('password', this.profileForm.value.password);
            this.router.navigateByUrl('/dashboard');

    });
}}
