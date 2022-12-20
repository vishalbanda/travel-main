import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from './booking'; 
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   url="http://localhost:3000/enroll";
   constructor(private http:HttpClient) {}
    
    enroll(user:User){
      return this.http.post<any>(this.url,user)
    }

    returnData(){
      return this.http.get<{[key:string]: any}>('https://travel-241cb-default-rtdb.firebaseio.com/user.json')
      .pipe(map((getRes) => {
        console.log(getRes);
        const bookingDetails=[];
        for(const key in getRes) {
          if(getRes.hasOwnProperty(key)){
            bookingDetails.push({...getRes[key],id:key});
          }
        }
        console.log(bookingDetails);
        return bookingDetails;
      }));
    }

  }