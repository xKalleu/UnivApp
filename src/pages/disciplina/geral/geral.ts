import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
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

     var original = Chart.controllers.doughnut.prototype.draw;

     Chart.controllers.doughnut.prototype.draw = function() {
     original.call(this);   
      var width = this.chart.width,
          height = this.chart.height;

      var fontSize = (height / 114).toFixed(2);
      this.chart.ctx.font = fontSize + "em Roboto";
      this.chart.ctx.textBaseline = "middle";

      var text = "70%",
          textX = Math.round((width - this.chart.ctx.measureText(text).width) / 2),
          textY = (height / 2) + 15;

      this.chart.ctx.fillStyle = "black";
      this.chart.ctx.fillText(text, textX, textY);
     };

    var ctx = (<HTMLCanvasElement> document.getElementById('graficoNotas')).getContext('2d');

    this.grafico = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Pontos ganhos', 'Pontos perdidos'],
            datasets: [{
                label: 'Nota total',
                data: [70, 30],
                backgroundColor: [
                    'rgba(0,55,123,0.5)'
                ]
            }]
        },
        options: {
          responsive: false,
          mainAspectRatio: false,
          tooltips: {
            callbacks: {
              label: function(tooltipItem, data) {
                var dataset = data.datasets[tooltipItem.datasetIndex];
                return dataset.data[tooltipItem.index];
              }
            },
            displayColors: false
          }
        }
    });
  
  }


}
