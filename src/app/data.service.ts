import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AppSettingsService {

  readonly API_URL = 'https://api.covid19api.com';

  constructor(private http: HttpClient) { 
  }

  public getJSON(): Observable<any> {
    return this.http.get(`${this.API_URL}/summary`);
  }
}
