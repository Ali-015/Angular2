import { AuthErrorService } from './../auth-error.service';
import { HttpService } from './../http.service';
import { CommunicateService } from './../communicate.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormGroup, FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';
import * as _ from 'underscore';
import { parse } from 'url';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [HttpService]
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(private router: Router, private service: CommunicateService, private http: HttpService) { }



  title = 'app';
  public loginForm: FormGroup;
  public newData: any;
  public errorMessage: boolean;
  public showLoader = false;
  public subscription;

  ngOnInit() {
    this.createForm();
    // this.loginForm.get('username').valueChanges.subscribe( x => console.log(x));
  }


  createForm() {
  this.loginForm = new FormGroup({
    username: new FormControl('', Validators.minLength(3)),
    password: new FormControl('', Validators.required)
  });

}
// Passing values using getters and setters while navigation
login(loginForm) {
  this.showLoader = true;  
  this.subscription = this.http.getDataFromServer(loginForm).subscribe(
    data => {
      console.log(data);
      this.newData = data;
      if (_.where(this.newData, {'id': parseInt(loginForm.value.password, 10), 'username': loginForm.value.username}).length) {
        this.service.set(loginForm.value);
        this.showLoader = false;
        this.router.navigate(['home/industry']);
    } else {
      this.errorMessage = true;
      this.showLoader = false;
      console.log("sdfsdfsdf");
    }
    },
    err => {
      this.showLoader = false;
      console.log("Error occured");
    }
  );
  console.log(this.subscription);
}


// login(loginForm) {
//   this.service.sendMessage('Message from Login Component to Home Component!');
//   this.router.navigate(['/home']);
// }


ngOnDestroy() {
  this.subscription.unsubscribe();
}


throwCustomError() {
  throw new AuthErrorService();
}


}
