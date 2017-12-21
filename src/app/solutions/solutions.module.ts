import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolutionComponent } from './solution/solution.component';
import { solutionRouting } from './solution-routing';

@NgModule({
  imports: [
    CommonModule,
    solutionRouting
  ],
  declarations: [SolutionComponent],
  exports: [SolutionComponent]
})
export class SolutionsModule { }
