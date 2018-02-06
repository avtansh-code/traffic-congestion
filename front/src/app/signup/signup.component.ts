import { Component, Injectable, ViewChild, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { AuthenticationService } from '../authentication/authentication.service';
import { UserComponent } from '../utils/user';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: `signup`,
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  // Here we tell Angular that we want the form
  // directives to be available in this component
  providers: [AuthenticationService]
})

export class SignupFormComponent implements OnInit {

  public inputLogo = 'assets/img/traffic1.png';
  public model: UserComponent = new UserComponent(1, '', '');
  public logintext: string = 'Sign Up';
  public color: string = 'black';
  public myForm: FormGroup;
  public forgotPassword: boolean = false;

  constructor(private _service: AuthenticationService, private router: Router) {
    let group: any = {};
    group.username = new FormControl('', Validators.required);
    group.password = new FormControl('', Validators.required);
    group.cnfmpassword = new FormControl('', Validators.required);
    group.name = new FormControl('', Validators.required);
    group.phone = new FormControl('', Validators.required);
    group.dob = new FormControl('', Validators.required);
    group.email = new FormControl('', Validators.required);
    this.myForm = new FormGroup(group);
  }

  public ngOnInit() {
    console.log('Inside the signup page');

    if (this._service.isAuthenticated()) {
      console.log('We are authenticated, why go to login page again');
      this.router.navigate(['/login']);
    }
  }

  logging: boolean = false;

  public loginUser() {
    let password =  this.myForm.controls['password'].value;
    let cnfmpassword =  this.myForm.controls['cnfmpassword'].value;
    let phone = this.myForm.controls['phone'].value;
    let email = this.myForm.controls['email'].value;
    let regexexpPhone = new RegExp('^[0-9]{10,10}$')
    if(password != cnfmpassword){
      alert("Password and Confirm Password Do Not Match");
    }
    else if(phone.length !=10 ){
      alert("Enter a valid phone number");
    }
    else if(password.length<9 || password.length>15){
      alert("Password Length should be between 9 and 15")
    }
    else if(regexexpPhone.test(phone) == false){
      alert("Invalid Phone Number");
    }
    else{
      this.logging = true;
      let body = {
        username: this.myForm.controls['username'].value,
        password: this.myForm.controls['password'].value,
        name: this.myForm.controls['name'].value,
        date: this.myForm.controls['dob'].value,
        phone: this.myForm.controls['phone'].value,
        email: this.myForm.controls['email'].value
      };
      this._service.signup(body)
        .subscribe((data) => {
          this.logging = false;
          this.router.navigate(['/login']);
        },
        (error) => {
          this.handleError(error);
        }
        );
    }
  }
  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg: string;
    this.logging = false;
    if(error === '401 - UNAUTHORIZED'){
      errMsg = 'Incorrect Username or Password';
    }
    else if(error === '400 - BAD REQUEST'){
      errMsg = 'Bad Request';
    }
    else{
      errMsg = 'Server Error';
    }
    console.error(errMsg); // log to console instead
    this.color = 'red';
    this.logintext = errMsg;
    return Observable.throw(errMsg);
  }
}
