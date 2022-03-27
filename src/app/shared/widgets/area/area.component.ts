import { Component, Input, OnInit } from '@angular/core';
import  * as Highcharts from 'Highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  chartOptions: {};
  @Input() data: any = [];
  Highcharts = Highcharts;

  constructor() { this.chartOptions = {}}

  ngOnInit() {
    this.chartOptions = {
      chart: {
          type: 'bar'
      },
      title: {
          text: 'test text'
      },
      subtitle: {
          text: 'demo'
      },
      tooltip: {
          valueSuffix: ' millions'
      },
      exporting:{
        enabled:true
      },
      credits:{
        enabled:false
      },
      legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'top',
          x: -40,
          y: 80,
          floating: true,
          borderWidth: 1,
          shadow: true
      },
      series: [{
          name: 'Year 1800',
          data: [107, 31, 635, 203, 2]
      }, {
          name: 'Year 1900',
          data: [133, 156, 947, 408, 6]
      }, {
          name: 'Year 2000',
          data: [814, 841, 3714, 727, 31]
      }, {
          name: 'Year 2016',
          data: [1216, 1001, 4436, 738, 40]
      }]
  };
  HC_exporting(Highcharts);
  setTimeout(()=>{
  window.dispatchEvent(
    new Event('resize')
  );
  },300);}
}