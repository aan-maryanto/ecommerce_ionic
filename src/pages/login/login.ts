import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})

export class LoginPage {

    _togglePass = ''
    auth = 'signin'

    constructor(
        public navCtrl: NavController
    ) {
        this._togglePass = 'password';
    }

    loginAction() {
        this.navCtrl.setRoot(HomePage)
    }

    registerAction() {
        this.navCtrl.setRoot(HomePage)
    }

    toHome() {
        this.navCtrl.push(HomePage)
    }

    togglePass() {
        if(this._togglePass == 'password')
            this._togglePass = 'text';
        else
            this._togglePass = 'password';
    }

}