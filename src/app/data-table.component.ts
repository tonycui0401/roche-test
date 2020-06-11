import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppSettingsService } from "./data.service";
import { PieChartDataService } from './piechartdata.service';


@Component({
    selector: "data-table",
    templateUrl: "./data-table.html",
    styleUrls: ['./data-table.component.css']
})


export class DataTableComponent {
    
    private data;

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

    showPieChart(country, totalConfirmed, totalDeaths, totalRecovered){
        this.sendNotification(country);
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
