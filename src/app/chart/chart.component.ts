import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['Lun', 'Mar','Mie', 'Jue', 'Vie', 'Sab', 'Dom'],
    datasets: [
      {
        data: [70, 45, 25, 45, 25, 72,55],
        label: 'Semana Pasada',
        backgroundColor: '#5D95BE',
        borderRadius: 10,
      }, 
      {
        data: [90, 55, 30, 39, 20, 80,75],
        label: 'Esta Semana',
        backgroundColor: '#272F65',
        borderRadius: 10,
      }, 
    ],
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
    scales: {
      x: {
        grid: {
          drawOnChartArea: false,
        },
      },
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          usePointStyle: true,
        },
      },
    },
  };

  constructor() {}
}