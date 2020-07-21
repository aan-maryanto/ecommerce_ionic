import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { HistoryPage } from '../pages/history/history';
import { NotificationPage } from '../pages/notification/notification';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen
    ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'History', component: HistoryPage },
      { title: 'Notification', component: NotificationPage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.backgroundColorByHexString('#3498DB');
      this.splashScreen.hide();
      // this.nav.setRoot(LoginPage);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    // this.nav.setRoot(page);
    // this.nav.setRoot(LoginPage);
    if(page == 'HomePage'){
      this.nav.setRoot(HomePage)
    }

    if(page == 'NotificationPage') {
      this.nav.setRoot(NotificationPage)
    }

    if(page == 'HistoryPage') {
      this.nav.setRoot(HistoryPage)
    }
    this.menu.close()
  }

  checkPage(page) {
    
  }
}
