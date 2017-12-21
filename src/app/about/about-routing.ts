import { AboutComponent } from './about/about.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const aboutRoutes: Routes = [
  {
    path: '',
    component: AboutComponent
  }
];

export const aboutRouting: ModuleWithProviders = RouterModule.forChild(aboutRoutes);
