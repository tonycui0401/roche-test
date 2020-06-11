import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppSettingsService } from "./data.service";
import { HttpClientModule } from '@angular/common/http';
import { DataTableModule } from "angular2-datatable";
import { DataTableComponent }  from './data-table.component';
import { PieChartComponent }  from './pie-chart.component';
import { PieChartDataService }  from './piechartdata.service';



import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule, HttpModule, HttpClientModule, DataTableModule
  ],
  providers: [AppSettingsService, PieChartDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
