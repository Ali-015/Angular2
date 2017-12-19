import { HttpService } from './../http.service';
import { CommunicateService } from './../communicate.service';
import { Component, OnInit } from '@angular/core';
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
export class LoginComponent implements OnInit {

  constructor(private router: Router, private service: CommunicateService, private http: HttpService) { }



  title = 'app';
  public loginForm: FormGroup;
  public newData: any;
  public errorMessage: boolean;

  ngOnInit() {
    this.createForm();
  }


  createForm() {
  this.loginForm = new FormGroup({
    username: new FormControl('', Validators.minLength(3)),
    password: new FormControl('', Validators.required)
  });

}
// Passing values using getters and setters while navigation
login(loginForm) {

  this.http.getDataFromServer(loginForm).subscribe(
    data => {
      console.log('success');
      console.log(data);
      this.newData = data;
      if (_.where(this.newData, {'id': parseInt(loginForm.value.password, 10), 'username': loginForm.value.username}).length) {
        console.log("contains");
        this.service.set(loginForm.value);
        this.router.navigate(['/home']);
    } else {
      this.errorMessage = true;
      console.log("sdfsdfsdf");
    }
    },
    err => {
      console.log("Error occured");
    }
  );

  
  // this.router.navigate(['/home']);
}


// login(loginForm) {
//   this.service.sendMessage('Message from Login Component to Home Component!');
//   this.router.navigate(['/home']);
// }




}
