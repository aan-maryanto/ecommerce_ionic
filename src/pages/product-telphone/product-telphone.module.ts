import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductTelphonePage } from './product-telphone';

@NgModule({
  declarations: [
    ProductTelphonePage,
  ],
  imports: [
    IonicPageModule.forChild(ProductTelphonePage),
  ],
})
export class ProductTelphonePageModule {}
