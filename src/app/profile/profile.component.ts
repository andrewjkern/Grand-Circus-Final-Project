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
  constructor(private formBuilder: FormBuilder, private router: Router,private httpClient: HttpClient) { }

  ngOnInit(): void {   
    this.httpClient.get(`http://localhost:3000/user/${localStorage.getItem('password')}`).subscribe((result: any) =>{
    console.log("User Info", result);
    this.user = result.data[0]
  });

    this.updateForm = this.formBuilder.group({
      firstname: ['', Validators.required],
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
  this.updateForm.setValue({
    firstname: this.user.firstname
  })  
}
onSubmit(){
console.log(this.updateForm.value)
}
}
