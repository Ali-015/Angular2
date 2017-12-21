import { IndustryRouting } from './industry-routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndustryComponent } from './industry/industry.component';

@NgModule({
  imports: [
    CommonModule,
    IndustryRouting
  ],
  declarations: [IndustryComponent],
  exports: [IndustryComponent]
})
export class IndustriesModule { }
