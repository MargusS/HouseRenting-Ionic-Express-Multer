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

  postCreate(house: House, blob): Observable<any> {
    let formData = new FormData();
    formData.append("title", house.title);
    formData.append("description", house.description);
    formData.append("price", house.price);
    formData.append("location", house.location);
    formData.append("rooms", house.rooms);
    formData.append("wc", house.wc);
    for(let i of blob){
      formData.append("images", i);
    }
    return this.httpClient.post(this.path + 'create', formData);
  }

  putUpdate(id: number, house: House): Observable<any> {
    return this.httpClient.put<any>(this.path + `update/${id}`, house);
  }

  deleteHouse(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.path + `delete/${id}`);
  }
}
