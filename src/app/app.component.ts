import { CommunicateService } from './communicate.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CommunicateService]  
})
export class AppComponent {

//   constructor(private router: Router) { }

//   title = 'app';
//   public loginForm: FormGroup;

//   ngOnInit() {
//     this.createForm();
//   }

//   createForm() {
//   this.loginForm = new FormGroup({
//     username: new FormControl('', Validators.minLength(3)),
//     password: new FormControl('', Validators.required)
//   });

// }

// login(loginForm) {
//   console.log(loginForm);
//   this.router.navigate(['/home']);
// }



}
