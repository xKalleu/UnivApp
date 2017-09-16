import { NotasPage } from './notas/notas';
import { GeralPage } from './geral/geral';
import { FaltasPage } from './faltas/faltas';
import { ApsPage } from './aps/aps';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-disciplina',
  templateUrl: 'disciplina.html',
})
export class DisciplinaPage {

    geralRoot: any = GeralPage;
    notasRoot: any = NotasPage;
    faltasRoot: any = FaltasPage;
    apsRoot : any = ApsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
