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
