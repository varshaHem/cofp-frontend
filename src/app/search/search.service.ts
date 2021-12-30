import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IPackaging } from '../model/packaging.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  packaging: IPackaging[] = [{ material: "carton", co2: 0.0224, quantity: 1, category: "beverage" },
  { material: "reusable glass", co2: 0.0961, quantity: 1, category: "beverage" },
  { material: "pet", co2: 0.1256, quantity: 1, category: "beverage" }]

  search(material: string): Observable<IPackaging[]> {
    console.log(material)
    // return this.http.get<any>(this.baseUrl + searchText))
    return of(this.packaging.filter(x => x.material === material));
  }

  constructor(private http: HttpClient) { }
}
