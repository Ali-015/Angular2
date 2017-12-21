import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { productRouting } from './product-routing';

@NgModule({
  imports: [
    CommonModule,
    productRouting
  ],
  declarations: [ProductComponent],
  exports: [ProductComponent]
})
export class ProductsModule { }
