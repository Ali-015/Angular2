import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolutionComponent } from './solution/solution.component';
import { solutionRouting } from './solution-routing';
import { ChartModule } from 'angular2-highcharts';

@NgModule({
  imports: [
    CommonModule,
    solutionRouting,
    ChartModule.forRoot(require('highcharts'))
  ],
  declarations: [SolutionComponent],
  exports: [SolutionComponent]
})
export class SolutionsModule { }
