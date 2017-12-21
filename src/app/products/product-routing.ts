import { ProductComponent } from './product/product.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const productRoutes: Routes = [
  {
    path: '',
    component: ProductComponent
  }
];

export const productRouting: ModuleWithProviders = RouterModule.forChild(productRoutes);
