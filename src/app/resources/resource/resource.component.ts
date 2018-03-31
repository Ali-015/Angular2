import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent implements OnInit {

  constructor() { }


  public options = {
    "type": "gauge",
    "theme": "light",
    "axes": [ {
    "axisThickness": 1,
    "axisAlpha": 0.2,
    "tickAlpha": 0.2,
    "valueInterval": 20,
    "bands": [ {
    "color": "#84b761",
    "endValue": 90,
    "startValue": 0
    }, {
    "color": "#fdd400",
    "endValue": 130,
    "startValue": 90
    }, {
    "color": "#cc4748",
    "endValue": 220,
    "innerRadius": "95%",
    "startValue": 130
    } ],
    "bottomText": "0 km/h",
    "bottomTextYOffset": -20,
    "endValue": 220
    } ],
    "arrows": [ {} ],
    "export": {
    "enabled": true
    }
  };

  ngOnInit() {
  }

}
