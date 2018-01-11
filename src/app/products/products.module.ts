import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { productRouting } from './product-routing';
import { MatListModule } from '@angular/material';
import { SearchPipe } from './search.pipe';

@NgModule({
  imports: [
    CommonModule,
    productRouting,
    MatListModule,
    FormsModule
  ],
  declarations: [ProductComponent, SearchPipe],
  exports: [ProductComponent]
})
export class ProductsModule { }
