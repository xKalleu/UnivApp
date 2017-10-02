import { Component } from '@angular/core';
import { App, NavController, NavParams } from 'ionic-angular';
import { NotaPage } from '../notas/nota/nota';

@Component({
  selector: 'page-notas',
  templateUrl: 'notas.html',
})

export class NotasPage {

    constructor(public appCtrl : App, public navCtrl: NavController, public navParams: NavParams) {
    }

    abrirNota() {     
    	this.appCtrl.getRootNav().push(NotaPage);
    }
    
}