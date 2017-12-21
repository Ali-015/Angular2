import { SolutionComponent } from './solution/solution.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const solutionRoutes: Routes = [
  {
    path: '',
    component: SolutionComponent
  }
];

export const solutionRouting: ModuleWithProviders = RouterModule.forChild(solutionRoutes);
