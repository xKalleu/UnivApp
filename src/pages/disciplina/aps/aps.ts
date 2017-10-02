import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { ApPage } from './ap/ap';

@Component({
  selector: 'page-aps',
  templateUrl: 'aps.html',
})

export class ApsPage {
	
	constructor(public appCtrl: App, public navCtrl: NavController, public navParams: NavParams) {
	
	}

  abrirAps() {
    this.appCtrl.getRootNav().push(ApPage);
  }

}