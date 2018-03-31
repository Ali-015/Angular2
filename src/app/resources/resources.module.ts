import { resourceRouting } from './resource-routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourceComponent } from './resource/resource.component';
import { ColorChangeDirective } from './color-change.directive';
import { AmChartsModule } from "@amcharts/amcharts3-angular";

@NgModule({
  imports: [
    CommonModule,
    resourceRouting,
    AmChartsModule
  ],
  declarations: [ResourceComponent, ColorChangeDirective],
  exports: [ResourceComponent]
})
export class ResourcesModule { }
