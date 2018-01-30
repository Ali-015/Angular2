import { resourceRouting } from './resource-routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourceComponent } from './resource/resource.component';
import { ColorChangeDirective } from './color-change.directive';

@NgModule({
  imports: [
    CommonModule,
    resourceRouting
  ],
  declarations: [ResourceComponent, ColorChangeDirective],
  exports: [ResourceComponent]
})
export class ResourcesModule { }
