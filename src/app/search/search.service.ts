import { Injectable } from '@angular/core';
import { first, map, Observable, of, pluck, tap } from 'rxjs';
import { IPackaging } from '../model/packaging.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  // packaging: IPackaging[] = [{ material: "carton", co2: 0.0224, quantity: 1, category: "beverage" },
  // { material: "reusable glass", co2: 0.0961, quantity: 1, category: "beverage" },
  // { material: "pet", co2: 0.1256, quantity: 1, category: "beverage" }]

  baseUrl: string = 'https://api.carboncloud.com/v0/'

  apiKey: string = '95NOSm7wU24EJ3zqf7IN99yFRQkWyhmcThAIwew3';

  headers = new HttpHeaders({'X-API-KEY': this.apiKey});

  // search(material: string): Observable<IPackaging[]> {
  //   console.log(material)
  //   return of(this.packaging.filter(x => x.material === material));
  // }

  search(material: string): Observable<any> {
    const newLocal = this.http.get<any>(this.baseUrl + 'search' + `?q=${material}`, { headers: this.headers });
    return newLocal
  }

  constructor(private http: HttpClient) { }
}
