import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolutionComponent } from './solution/solution.component';
import { solutionRouting } from './solution-routing';
import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
declare var require: any;

export function highchartsFactory() {
  const hc = require('highcharts');
  const dd = require('highcharts/modules/drilldown');
  dd(hc);

  return hc;
}


@NgModule({
  imports: [
    CommonModule,
    solutionRouting,
    ChartModule
  ],
  providers: [
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    }
  ],
  declarations: [SolutionComponent],
  exports: [SolutionComponent]
})
export class SolutionsModule { }
