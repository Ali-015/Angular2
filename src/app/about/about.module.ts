import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { aboutRouting } from './about-routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { MatSelectModule, MatFormFieldModule, MatInput, MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    aboutRouting,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule
  ],
  declarations: [AboutComponent],
  exports: [AboutComponent]
})
export class AboutModule { }
