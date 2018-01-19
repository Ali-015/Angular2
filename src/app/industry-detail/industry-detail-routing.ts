import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndustryDetailComponent } from './industry-detail/industry-detail.component';


const industryDetailRoutes: Routes = [
  {
    path: '',
    component: IndustryDetailComponent
  }
];

export const IndustryDetailRouting: ModuleWithProviders = RouterModule.forChild(industryDetailRoutes);
