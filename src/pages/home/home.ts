import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { ModalSearchPage } from './../modal-search/modal-search';
import { ProductPulsaDataPage } from '../product-pulsa-data/product-pulsa-data';
import { ProductEmoneyPage } from '../product-emoney/product-emoney';
import { ProductBpjsPage } from '../product-bpjs/product-bpjs';
import { ProductKreditPage } from '../product-kredit/product-kredit';
import { ProductTvLanggananPage } from '../product-tv-langganan/product-tv-langganan';
import { ProductTelphonePage } from '../product-telphone/product-telphone';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    private navCtrl: NavController,
    private mdlCtrl: ModalController,
    ) {

  }

  openModal()
  {
    const modalsearch = this.mdlCtrl.create(ModalSearchPage);
    modalsearch.onDidDismiss(data => {
      console.log(data)
    });
    modalsearch.present()
  }

  openMenu(id) {
    switch(id) {
      case '1':
        this.navCtrl.push(ProductPulsaDataPage)
        break
      case '2':
        this.navCtrl.push(ProductEmoneyPage)
        break
      case '3':
        this.navCtrl.push(ProductBpjsPage)
        break
      case '4':
        this.navCtrl.push(ProductKreditPage)
        break
      case '5':
        this.navCtrl.push(ProductTvLanggananPage)
        break
      case '6':
        this.navCtrl.push(ProductTelphonePage)
        break
      default:
        return null;
    }
  }

}
