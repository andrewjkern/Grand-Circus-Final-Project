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
  barChartData: ChartDataSets[];
  barChartLabels: Label[];
  barChartOptions;
  barChartColors: Color[];
  barChartLegend;
  barChartPlugins;
  barChartType;
  waterTempsLabels = [];
  lakeMichiganTemps = [];
  lakeMich = [];
  lakeHuronTemps = [];
  lakeHuron = [];
  lakeErieTemps = [];
  lakeErie = [];
  lakeSuperiorTemps = [];
  lakeSup = [];
  lakeOntarioTemps = [];
  lakeOnt = [];

  convertToF = (celsius: number) => {
    let far = celsius * 9/5 + 32;
    return far;
  }


  constructor(private buoyService: ServiceService) { }

  ngOnInit(): void {
    this.buoyService.currentWeather().subscribe((result: any) => {
      console.log('result', result);
    });

    this.buoyService.averageDailyWaterTemp().subscribe((result: any) => {
      this.glosapi = result;
      console.log("This is the api call", this.glosapi);

      this.glosapi.table.rows.forEach(row => {
        this.lakeSup.push([row[0], this.convertToF(row[2])]);
        this.lakeMich.push([row[0], this.convertToF(row[3])]);
        this.lakeHuron.push([row[0], this.convertToF(row[4])]);
        this.lakeErie.push([row[0], this.convertToF(row[5])]);
        this.lakeOnt.push([row[0], this.convertToF(row[6])]);
        this.waterTempsLabels.push(row[0]);
        
        this.waterTempsLabels.sort((a,b) => {
          if (a > b ) return 1;
          if (a < b) return -1;
          return 0;
        })
      })
      this.setData();
    }, (err) => {
      console.log('Error applying the glosapi call')
    });
  }

  //LakeSup is an array containing many arrays, each with a year + temp 
  //Filter each array based on year
  //Need average of each Lake Temp for each year, should have 5 bars for each year


  setData = () => {
    // let supAverageTemp = this.lakeSuperiorTemps.reduce((a, b) => {
    //   return (a + b)
    // })/this.lakeSuperiorTemps.length;
  

    this.barChartData = [
      { data:this.lakeSuperiorTemps, label: 'Lake Superior' },
      { data: this.lakeMichiganTemps, label: 'Lake Michigan' },
      { data: this.lakeErieTemps, label: 'Lake Erie' },
      { data: this.lakeOntarioTemps, label: 'Lake Ontario' },
      { data: this.lakeHuronTemps, label: 'Lake Huron' },
    ];

    this.barChartLabels = ['2015', '2016', '2017', '2018', '2019', '2020'];

    this.barChartOptions = {
      responsive: true,
      title: {
        text: 'Great Lakes Average Temperature By Year',
        display: true
      }
    };

    this.barChartColors = [
      {
        borderColor: 'black',
        backgroundColor: 'rgba(57,151,181, 1)',
      },
    ];

    this.barChartLegend = true;
    this.barChartPlugins = [];
    this.barChartType = 'bar';
  }
}




