import { Component } from '@angular/core';
import { PieChartDataService } from './piechartdata.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private pieDataService: PieChartDataService
  ) {}

  country = 'click the table row to see the chart'

  getNotification(country) {
  this.country = country
}
  
  clear(){
  this.country = 'click the table row to see the chart'
  this.pieDataService.reset();
  }


}
