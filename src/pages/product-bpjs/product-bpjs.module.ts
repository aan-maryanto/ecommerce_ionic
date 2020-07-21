import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductBpjsPage } from './product-bpjs';

@NgModule({
  declarations: [
    ProductBpjsPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductBpjsPage),
  ],
})
export class ProductBpjsPageModule {}
