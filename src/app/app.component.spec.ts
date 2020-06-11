import { TestBed, getTestBed, async} from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DataTableComponent }  from './data-table.component';
import { PieChartComponent }  from './pie-chart.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppSettingsService } from "./data.service";
import { PieChartDataService } from './piechartdata.service';
import { DataTableModule } from "angular2-datatable";
import { HttpModule } from '@angular/http';
import { HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';
import * as d3 from "d3";

describe('AppComponent', () => {
  let injector: TestBed;
  let service: AppSettingsService;
  let httpMock: HttpTestingController;
  let getAllCountries: any;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        DataTableModule,
        HttpModule,
        HttpClientModule,
        HttpClientTestingModule
    ],
      declarations: [
        AppComponent,
        DataTableComponent,
        PieChartComponent
      ],
      providers: [
        AppSettingsService,
        PieChartDataService
    ]
    }).compileComponents();
    injector = getTestBed();
    service = injector.get(AppSettingsService);
    httpMock = injector.get(HttpTestingController);
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as intro message 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.country).toEqual('click the table row to see the chart');
  }));

  it('should return 186 records', () => {
    service.getJSON().subscribe(data => {
      expect(data.Countries.length).toBe(186);
    });
  });

  function CircleManager() {};

  CircleManager.prototype.draw = function(radius) {
    var svg = d3.select("body")
            .append("svg");
    };

  describe("draw", function() {
    it("Constructs an svg", function() {
        var d3SpyObject = jasmine.createSpyObj(d3, ['append', 'attr']);
        var svgSpyObject = jasmine.createSpyObj('svg', ['append', 'attr', 'style']);
        var circleManager = new CircleManager();
        circleManager.draw(50);
    });
});

});
