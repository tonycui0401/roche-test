import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { IData } from './data.interface';

@Injectable()
export class PieChartDataService {
    private mockData: IData[] = [
      {
        label: "TOTAL CONFIRMED",
        value: 2,
      },
      {
        label: "TOTAL DEATHS",
        value: 2,
      },
      {
        label: "TOTAL RECOVERED",
        value: 2,
      },
    ];

    private dataSubject = new BehaviorSubject<IData[]>(this.mockData);
    
    $data = this.dataSubject.asObservable();
   
    assignData(newData:IData[]){
        this.dataSubject.next(newData);
    }

    reset() {
        this.dataSubject.next(this.mockData);
    }

}