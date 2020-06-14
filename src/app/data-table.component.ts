import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppSettingsService } from "./data.service";
import { PieChartDataService } from './piechartdata.service';


@Component({
    selector: "data-table",
    templateUrl: "./data-table.html",
    styleUrls: ['./data-table.component.css']
})


export class DataTableComponent {
    
    data:any
    currentCountry:any

    constructor(
        private appSettingsService: AppSettingsService,
        private pieDataService: PieChartDataService
      ) {}

    @Output() notifyParent: EventEmitter<any> = new EventEmitter();
    sendNotification(country) {
        this.notifyParent.emit(country);
    }
  

    ngOnInit() {
        this.appSettingsService.getJSON().subscribe(data => {
            this.data = data.Countries;
          });
      }

    showPieChart(event: any, country, totalConfirmed, totalDeaths, totalRecovered){
        this.sendNotification(country);
        this.currentCountry = country;
        console.log(this.currentCountry)
        let newData = [{
            label: 'TOTAL CONFIRMED',
            value: totalConfirmed,
          },

          {
            label: 'TOTAL DEATHS',
            value: totalDeaths,
          },

          {
            label: 'TOTAL RECOVERED',
            value: totalRecovered,
          },
        
        ];
        this.pieDataService.assignData(newData)
    }
   
}
