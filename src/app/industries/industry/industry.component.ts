import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './industry.component.html',
  styleUrls: ['./industry.component.css']
})
export class IndustryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("Industry");
  }

}
