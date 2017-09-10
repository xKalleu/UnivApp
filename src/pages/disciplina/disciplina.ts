import { GeralPage } from './geral/geral';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-disciplina',
  templateUrl: 'disciplina.html',
})
export class DisciplinaPage {

    geralRoot = GeralPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
