import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductPulsaDataPage } from './product-pulsa-data';

@NgModule({
  declarations: [
    ProductPulsaDataPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductPulsaDataPage),
  ],
})
export class ProductPulsaDataPageModule {}
