import { CommunicateService } from './../communicate.service';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private service: CommunicateService) { }



  title = 'app';
  public loginForm: FormGroup;

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
  // console.log(loginForm);
  this.service.set(loginForm.value);
  this.router.navigate(['/home']);
}


// login(loginForm) {
//   // console.log(loginForm);
//   this.service.sendMessage('Message from Login Component to Home Component!');
//   this.router.navigate(['/home']);
// }




}
