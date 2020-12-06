import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { ServiceService } from '../Services/service.service';



@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})
export class TrendsComponent implements OnInit {

  glosapi;
  lineChartData: ChartDataSets[];
  lineChartLabels: Label[];
  lineChartOptions;
  lineChartColors: Color[];
  lineChartLegend;
  lineChartPlugins;
  lineChartType;
  waterTemps = [];
  waterTempsLabels = [];


  constructor(private buoyService: ServiceService) { }

  ngOnInit(): void {
    this.buoyService.currentWeather().subscribe((result: any) => {
      console.log('result', result);
    });

    this.buoyService.practiceGlos().subscribe((result: any) => {
      console.log('result', result);
      this.glosapi = result;
      this.glosapi.table.rows.forEach(row => {
        this.waterTemps.push(row[13]);
        this.waterTempsLabels.push(row[0]);
      })
      console.log(this.waterTemps);
      this.setData();
    }, (err) => {
      console.log('Error applying the glosapi call')
    });
  }

  setData = () => {
    this.lineChartData = [
      { data: this.waterTemps, label: 'Water Temperature' },
    ];

    this.lineChartLabels = this.waterTempsLabels;

    this.lineChartOptions = {
      responsive: true,
    };

    this.lineChartColors = [
      {
        borderColor: 'black',
        backgroundColor: 'rgba(255,255,0,0.28)',
      },
    ];

    this.lineChartLegend = true;
    this.lineChartPlugins = [];
    this.lineChartType = 'line';
  }
}




