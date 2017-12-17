import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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

login(loginForm) {
  console.log(loginForm);
}



}
