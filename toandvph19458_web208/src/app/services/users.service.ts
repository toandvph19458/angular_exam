import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  login(data:any):Observable<any>{
  return this.http.post("http://localhost:3000/login",data)
  }
  signup(data:any):Observable<any>{
    return this.http.post("http://localhost:3000/users",data)
    }
}
