import { ResourceComponent } from './resource/resource.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const resourceRoutes: Routes = [
  {
    path: '',
    component: ResourceComponent
  }
];

export const resourceRouting: ModuleWithProviders = RouterModule.forChild(resourceRoutes);
