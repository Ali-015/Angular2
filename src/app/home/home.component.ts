import { CommunicateService } from './../communicate.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: CommunicateService) { }

  public data: Subscription;
  public data1: any;


  fillerNav = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6'];
  
    fillerContent = Array(1).fill(0).map(() =>
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
         labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
         laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
         voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
         cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  // Working with getters and setters
  ngOnInit() {
    this.data = this.service.get();
    console.log(this.data);
  }

  // ngOnInit() {
  //   this.data = this.service.getMessage().subscribe(data1 => { this.data1 = data1;
  //   });
  //   console.log(this.data1);
  // }

}
