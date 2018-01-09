import { IndustryRouting } from './industry-routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndustryComponent } from './industry/industry.component';
import { MatFormFieldModule, MatTableModule, MatPaginatorModule, MatInputModule, MatSortModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    IndustryRouting,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule
  ],
  declarations: [IndustryComponent],
  exports: [IndustryComponent]
})
export class IndustriesModule { }
