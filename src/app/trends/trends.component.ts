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

  twenty15;
  twenty15temps = [];
  twenty15Average;
  twenty16;
  twenty16temps = [];
  twenty16Average;
  twenty17;
  twenty17temps = [];
  twenty17Average;
  twenty18;
  twenty18temps = [];
  twenty18Average;
  twenty19;
  twenty19Average;
  twenty19temps = [];
  twenty20;
  twenty20Average;
  twenty20temps = [];

  lakeErie = [];
  lakeSup = [];
  lakeMich = [];
  lakeOnt = [];
  lakeHuron = [];


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
      console.log("GLOS API", this.glosapi)

      this.twenty15 = this.glosapi.table.rows.filter(data => data[0] === 2015);
      this.twenty16 = this.glosapi.table.rows.filter(data => data[0] === 2016);
      this.twenty17 = this.glosapi.table.rows.filter(data => data[0] === 2017);
      this.twenty18 = this.glosapi.table.rows.filter(data => data[0] === 2018);
      this.twenty19 = this.glosapi.table.rows.filter(data => data[0] === 2019);
      this.twenty20 = this.glosapi.table.rows.filter(data => data[0] === 2020);

      this.twenty15temps = this.sortByLake(this.twenty15);
      this.twenty16temps = this.sortByLake(this.twenty16);
      this.twenty17temps = this.sortByLake(this.twenty17);
      this.twenty18temps = this.sortByLake(this.twenty18);
      this.twenty19temps = this.sortByLake(this.twenty19);
      this.twenty20temps = this.sortByLake(this.twenty20);

      this.twenty15Average = this.getAverages(this.twenty15temps);
      this.twenty16Average = this.getAverages(this.twenty16temps);
      this.twenty17Average = this.getAverages(this.twenty17temps);
      this.twenty18Average = this.getAverages(this.twenty18temps);
      this.twenty19Average = this.getAverages(this.twenty19temps);
      this.twenty20Average = this.getAverages(this.twenty20temps);

      this.glosapi.table.rows.forEach(row => {

        this.waterTempsLabels.push(row[0]);
      })
      this.setData();
      this.setLakeData();

    }, (err) => {
      console.log('Error applying the glosapi call')
    });
  }

sortByLake = (temp: any[]) => {
  let year = [];
  for (let i = 2; i < 7; i++) {
    let array = [];
    temp.forEach(obj => {array.push(obj[i])});
    year.push(array);
  }
  return year;
}

setLakeData = () => {
  this.lakeSup.push(this.twenty15Average[0], this.twenty16Average[0], this.twenty17Average[0], this.twenty18Average[0], this.twenty19Average[0], this.twenty20Average[0]);
  this.lakeMich.push(this.twenty15Average[1], this.twenty16Average[1], this.twenty17Average[1], this.twenty18Average[1], this.twenty19Average[1], this.twenty20Average[1]);
  this.lakeHuron.push(this.twenty15Average[2], this.twenty16Average[2], this.twenty17Average[2], this.twenty18Average[2], this.twenty19Average[2], this.twenty20Average[2]);
  this.lakeErie.push(this.twenty15Average[3], this.twenty16Average[3], this.twenty17Average[3], this.twenty18Average[3], this.twenty19Average[3], this.twenty20Average[3]);
  this.lakeOnt.push(this.twenty15Average[4], this.twenty16Average[4], this.twenty17Average[4], this.twenty18Average[4], this.twenty19Average[4], this.twenty20Average[4]);
}

getAverages = (temp: any[]) => {
  let averagesArray = [];
  for (let z = 0; z < temp.length; z++) {
    let total = 0;
    for (let i =0; i < temp[z].length; i++) {
      total = temp[z][i] + total
  } averagesArray.push(this.convertToF(total/temp[z].length).toFixed(2));
  } return averagesArray;
}

  setData = () => {
    this.barChartData = [
      { data: this.lakeSup, label: 'Lake Superior' },
      { data: this.lakeMich, label: 'Lake Michigan' },
      { data: this.lakeHuron, label: 'Lake Huron' },
      { data: this.lakeErie, label: 'Lake Erie' },
      { data: this.lakeOnt, label: 'Lake Ontario' },
    ];

    this.barChartLabels = ['2015', '2016', '2017', '2018', '2019', '2020'];

    this.barChartOptions = {
      responsive: true,
      title: {
        text: 'Great Lakes Average Temperature By Year',
        display: false      }
    };

    this.barChartColors = [
      {
        borderColor: 'black',
        backgroundColor: 'rgba(57,151,181, .5)',
      },
    ];

    this.barChartLegend = true;
    this.barChartPlugins = [];
    this.barChartType = 'bar';
  }
}




