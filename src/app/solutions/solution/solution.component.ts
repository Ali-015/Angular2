import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent implements OnInit {

  constructor() { }

  options: Object;
  newOptions: Object;
  lastOptions: Object;
  from: any;
  to: any;
  point: number;
  array: number[];



  ngOnInit() {
    this.array = [29.9, 71.5, 106.4, 129.2];
    this.options = {
      title: { text: 'simple chart' },
      series: [{
        data: this.array,
      }]
    };

    this.newOptions = {
      title: { text: 'event chart' },
      chart: { zoomType: 'x' },
      series: [{
        data: [9.9, 1.5, 16.4, 19.2, 25, 12, 32],
      },
      {
        data: [1, 2 , 3 , 4, 5, 6, 7, 8, 89, 9],
      }]
    };

    this.lastOptions = {
      title: { text: 'point select' },
      chart: { zoomType: 'x' },
      series: [{
        data: [2.9, 7.5, 1.4, 29.2, 45, 13, 20],
        allowPointSelect: true
      }]
    };





  }

  onChartSelection(e) {
    console.log(e);
    this.from = e.originalEvent.xAxis[0].min.toFixed(2);
    this.to = e.originalEvent.xAxis[0].max.toFixed(2);
  }

  onPointSelect(e) {
    this.point = e.context.y;
  }
}
