import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../interfaces/product';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http:HttpClient) {

   }
   getAll():Observable <Iproduct[]> {
    return this.http.get<Iproduct[]>(" http://localhost:3000/products")
  }
  deleteproduct(id:any):Observable <Iproduct> {
    return this.http.delete<Iproduct>(" http://localhost:3000/products/"+id)
  }
  update(data:any):Observable <Iproduct> {
    return this.http.put<Iproduct>(" http://localhost:3000/products/"+data.id,data)
  }
  getOne(id:any):Observable <Iproduct> {
    return this.http.get<Iproduct>(" http://localhost:3000/products/"+id)
  }
  add(data:any):Observable <Iproduct> {
    return this.http.post<Iproduct>(" http://localhost:3000/products",data)
  }
}
