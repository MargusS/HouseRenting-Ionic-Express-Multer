import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  path = 'http://localhost:8080/img/'

  constructor(private httpClient: HttpClient) { }

  getGallery(id: number){
    return this.httpClient.get(this.path + `lista/${id}`);
  }
  getMainImage(id: number){
    return this.httpClient.get(this.path + `${id}`);
  }

  postCreateImage(id:number, blob): Observable<any>{
    let formData = new FormData();
    for(let i of blob){
      formData.append("images", i);
    }
    return this.httpClient.post(this.path + `create/${id}`, formData);
  }

  putUpdate(id: number, blob): Observable<any> {
    let formData = new FormData();
    formData.append("image", blob);
    return this.httpClient.put<any>(this.path + `update/${id}`, formData);
  }

  deleteImage(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.path + `delete/${id}`);
  }
}
