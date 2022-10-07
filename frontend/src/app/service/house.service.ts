import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { House } from '../models/house';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  path = 'http://localhost:8080/house/'

  constructor(private httpClient: HttpClient) { }

  getHouses(): Observable<House[]> {
    return this.httpClient.get<House[]>(this.path + 'lista');
  }
  getDetail(id: number): Observable<House> {
    return this.httpClient.get<House>(this.path + `/${id}`);
  }

  postCreate(house: House): Observable<any> {
    return this.httpClient.post<any>(this.path + `create`, house);
  }

  putUpdate(id: number, house: House): Observable<any> {
    return this.httpClient.put<any>(this.path + `update/${id}`, house);
  }

  deleteHouse(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.path + `delete/${id}`);
  }
}
