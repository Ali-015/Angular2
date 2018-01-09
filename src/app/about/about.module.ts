import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { aboutRouting } from './about-routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { MatSelectModule, MatFormFieldModule, MatInput, MatInputModule, MatDialogModule } from '@angular/material';
import { MyDialogComponent } from './my-dialog/my-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    aboutRouting,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatDialogModule
  ],
  declarations: [AboutComponent, MyDialogComponent],
  entryComponents: [
    MyDialogComponent
  ],
  exports: [AboutComponent]
})
export class AboutModule { }
