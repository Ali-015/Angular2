import { resourceRouting } from './resource-routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourceComponent } from './resource/resource.component';

@NgModule({
  imports: [
    CommonModule,
    resourceRouting
  ],
  declarations: [ResourceComponent],
  exports: [ResourceComponent]
})
export class ResourcesModule { }
