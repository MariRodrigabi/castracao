import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Component, ViewChild } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: comida,
  templateUrl: './comida.page.html',
  styleUrls: ['./comida.page.scss'],
})
export class ComidaPage {

  @ViewChild('barChart', { static: false }) barChart;
  barras: any;
  colorArray: any;
  array: any;

this.array = [37, 48, 69, 21];

  createBarChart() {
    //Pega 4 cores do array de cores que foi definida em outra função
    this.generateColorArray(4);
    this.barras = new Chart(this.barChart.nativeElement, {
      type: 'pie',
	//Plugin para criação das legendas 
      plugins: [ChartDataLabels],
//Label se refere ao nome de cada parte do gráfico e data e a quantidade de cada “fatia” do gráfico
      data: {
        labels: [‘Pizza’, ‘Hambúrguer’, ‘Isca de Peixe’, ‘Batata Frita’],
        datasets: [{
          label: 'Tipos de Comida,
          data: [this.array],
	    //busca as cores pré-selecionadas
          backgroundColor: this.colorArray,
          borderColor: '#ffffff',
          borderWidth: 2
        }]
      },
	//Opções e formatação da legenda
      options: {
        responsive: true,
        plugins: {
          datalabels: {
            color: "black",
            textAlign: "center",
            font: {
              weight: "bold",
              family: "Times New Roman",
              size: 14
            },
          }
        }
      }
    });
  }
  
  //Busca n cores dentro deste array, que podem ser pré-definidas ou    sortidas.
  generateColorArray(num) {
    this.colorArray = ['#2980B9', '#73f2a9', '#ffa54f', '#db7093', '#27408b', '#008b45', '#ff7400', '#dcce76', '#330033', '#FFFF66', '#455A64',
      '#D32F2F', '#81D4FA', '#6600CC', '#CCFFCC', '#795548', '#4A235A'];
  }
}