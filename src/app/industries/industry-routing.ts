import { IndustryComponent } from './industry/industry.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const industryRoutes: Routes = [
  {
    path: '',
    component: IndustryComponent,
    // children: [
    //   { path: 'industryDetail', 
    //   loadChildren: 'app/industry-detail/industry-detail.module#IndustryDetailModule'
    //   }
    // ]
  }
];

export const IndustryRouting: ModuleWithProviders = RouterModule.forChild(industryRoutes);
