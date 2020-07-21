import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HistoryPage } from '../pages/history/history';
import { NotificationPage } from '../pages/notification/notification';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ModalSearchPage } from '../pages/modal-search/modal-search';
import { ProductBpjsPage } from '../pages/product-bpjs/product-bpjs';
import { ProductEmoneyPage } from '../pages/product-emoney/product-emoney';
import { ProductKreditPage } from '../pages/product-kredit/product-kredit';
import { ProductPulsaDataPage } from '../pages/product-pulsa-data/product-pulsa-data';
import { ProductTelphonePage } from '../pages/product-telphone/product-telphone';
import { ProductTvLanggananPage } from '../pages/product-tv-langganan/product-tv-langganan';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HistoryPage,
    NotificationPage,
    LoginPage,
    ProductBpjsPage,
    ProductEmoneyPage,
    ProductKreditPage,
    ProductPulsaDataPage,
    ProductTelphonePage,
    ProductTvLanggananPage,
    // MODAL
    ModalSearchPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HistoryPage,
    NotificationPage,
    LoginPage,
    ProductBpjsPage,
    ProductEmoneyPage,
    ProductKreditPage,
    ProductPulsaDataPage,
    ProductTelphonePage,
    ProductTvLanggananPage,
    // MODAL
    ModalSearchPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
