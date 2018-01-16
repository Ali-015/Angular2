import { IndustryRouting } from './industry-routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndustryComponent } from './industry/industry.component';
import { MatFormFieldModule, MatTableModule, MatPaginatorModule, MatInputModule, MatSortModule, MatDialogModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyNewDialogComponent } from './../about/my-dialog/my-dialog.component';


@NgModule({
  imports: [
    CommonModule,
    IndustryRouting,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  declarations: [IndustryComponent, MyNewDialogComponent],
  entryComponents: [
    MyNewDialogComponent
],
  exports: [IndustryComponent]
})
export class IndustriesModule { }
