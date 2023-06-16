import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  getAll():Observable<Iproduct[]>{
    return this.http.get<Iproduct[]>(" http://localhost:3000/products")
  }
  getOne(id:any):Observable<Iproduct>{
    return this.http.get<Iproduct>(" http://localhost:3000/products/"+id)
  }
  deletePr(id:any):Observable<Iproduct>{
    return this.http.delete<Iproduct>(" http://localhost:3000/products/"+id)
  }
  update(data:any):Observable<Iproduct>{
    return this.http.put<Iproduct>(" http://localhost:3000/products/"+data.id,data)
  }
  add(data:any):Observable<Iproduct>{
    return this.http.post<Iproduct>(" http://localhost:3000/products",data)
  }
}
