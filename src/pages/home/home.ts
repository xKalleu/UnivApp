import { HorariosPage } from './../horarios/horarios';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  abrirHorarios() {
    this.navCtrl.setRoot(HorariosPage)
  }

}
