import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _loginSuccess = new BehaviorSubject<any>('useful');
  cart$ = this._loginSuccess.asObservable();


  private baseUrl: string = "https://localhost:44351/api/User"
  constructor(private http: HttpClient) { }

  // signup(userobj:any){
  //    return this.http.post<any>(`${this.baseUrl}`,userobj{
  //     headers: { 'Content-Type': 'application/json' })
  // }
  signup(userobj: any): Observable<any> {
    debugger
    return this.http.post<any>("https://localhost:44351/api/Auth/register", userobj);


  }
  login(userobj: any) {
    debugger
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json'
    // });
    return this.http.post<any>("https://localhost:44351/api/Auth/login", userobj)
  }

  _loginSuccess1() {
    return this.http.get<any>("https://localhost:44351/api/User");
  }


  setpagenavigationId() {
    debugger
    return this.http.get<any>("https://localhost:44351/api/Auth/Admins");
    // this._loginSuccess.next(value1);
  }

}
