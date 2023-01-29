import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private baseUrl:string="https://localhost:44389/api/User/"
  constructor(private http:HttpClient) { }

  signup(userobj:any){
     return this.http.post<any>(`${this.baseUrl}register`,userobj)
  }
  login(loginobj:any){
    return this.http.post<any>(`${this.baseUrl}authenticate`,loginobj)
 }
}
