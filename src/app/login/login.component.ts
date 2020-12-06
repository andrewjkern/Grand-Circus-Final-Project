import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import {Router} from '@angular/router'
import {ServiceService} from '../Services/service.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private http:HttpClient) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    })
  }
  
onSubmit(){
  console.log(this.loginForm.value);
  this.http.get(`http://localhost:3000/login/${this.loginForm.value.password}`).subscribe((res) => {
    console.log('RESPONSE', res);
    localStorage.setItem('password',this.loginForm.value.password);
    this.router.navigateByUrl('/dashboard')
  })
}
}
