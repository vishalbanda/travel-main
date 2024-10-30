import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { UserRoles } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _loginSuccess = new BehaviorSubject<any>('useful');
  cart$ = this._loginSuccess.asObservable();


  private baseUrl: string = "https://travel20241030113249.azurewebsites.net/api/User"
  constructor(private http: HttpClient) { }

  // signup(userobj:any){
  //    return this.http.post<any>(`${this.baseUrl}`,userobj{
  //     headers: { 'Content-Type': 'application/json' })
  // }
  signup(userobj: any): Observable<any> {
    debugger
    return this.http.post<any>("https://travel20241030113249.azurewebsites.net/api/Auth/register", userobj);
  }
  GetRoles() :Observable<UserRoles[]>{
    debugger
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json'
    // });
    https://travel20241030113249.azurewebsites.net/api/Auth/GetRoles
    return this.http.get<UserRoles[]>("https://travel20241030113249.azurewebsites.net/api/Auth/GetRoles")
  }
  login(userobj: any) {
    debugger
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json'
    // });
    return this.http.post<any>("https://travel20241030113249.azurewebsites.net/api/Auth/login", userobj)
  }

  _loginSuccess1() {
    return this.http.get<any>("https://travel20241030113249.azurewebsites.net/api/User");
  }


  setpagenavigationId() {
    debugger
    
    return this.http.get<any>("https://travel20241030113249.azurewebsites.net/api/Auth/Admins");
    // this._loginSuccess.next(value1);
  }

}
