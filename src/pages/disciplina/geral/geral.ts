import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';

@Component({
  selector: 'page-geral',
  templateUrl: 'geral.html',
})
export class GeralPage {

    @ViewChild('graficoNotas') graficoNotas;

    grafico : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad(){
    this.grafico = new Chart(this.graficoNotas.nativeElement, {
        type: 'doughnut',
        data: {
            labels: ['Pontos ganhos', 'Pontos perdidos'],
            datasets: [{
                label: 'Nota total',
                data: [70, 30],
                backgroundColor: [
                    'rgba(63,195,128,0.4)'
                ]
            }]
        }
    });
  }

}
