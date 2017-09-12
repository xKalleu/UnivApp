import { DisciplinaPage } from './../disciplina/disciplina';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-disciplinas',
  templateUrl: 'disciplinas.html',
})
export class DisciplinasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

    abrirDisciplina() {
      this.navCtrl.push(DisciplinaPage);
  }

}
