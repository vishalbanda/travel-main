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
      return this.http.get<{[key:string]: any}>('https://packup-34a17-default-rtdb.firebaseio.com/user.json')
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
    getPlace(){
      return[
        {"imgUrl":"https://images.pexels.com/photos/6472566/pexels-photo-6472566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Place":"India Gate","Loaction":"New Delhi"},
        {"imgUrl":"https://images.pexels.com/photos/13487368/pexels-photo-13487368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Place":"Red Fort","Loaction":"New Delhi"},
        {"imgUrl":"https://images.pexels.com/photos/9812255/pexels-photo-9812255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","Place":"Lotus Temple","Loaction":"New Delhi"},
        {"imgUrl":"https://images.pexels.com/photos/12470213/pexels-photo-12470213.jpeg?auto=compress&cs=tinysrgb&w=600","Place":"Jama Masjid","Loaction":"New Delhi"},
        {"imgUrl":"https://images.pexels.com/photos/14774142/pexels-photo-14774142.jpeg?auto=compress&cs=tinysrgb&w=600","Place":"Akshardham","Loaction":"New Delhi"},
        {"imgUrl":"https://images.pexels.com/photos/12460246/pexels-photo-12460246.jpeg?auto=compress&cs=tinysrgb&w=400","Place":"Taj Hotel","Loaction":"Mumbai"},
        {"imgUrl":"https://images.pexels.com/photos/12460245/pexels-photo-12460245.jpeg?auto=compress&cs=tinysrgb&w=400","Place":"Gateway of India","Loaction":"Mumbai"},
        {"imgUrl":"https://media.istockphoto.com/id/1186045729/photo/view-of-the-tropical-forest-in-the-sanjay-gandhi-national-park-mumbai-maharashtra-india-near.jpg?s=612x612&w=0&k=20&c=iUy6QD_O98TZYb9Yi9WL0hqhC6DaTtZVbjg7lCdEwKY=","Place":"Sanjay Gandhi National Park","Loaction":"Mumbai"},
        {"imgUrl":"","Place":"Elephant Caves","Loaction":"Mumbai"},
        {"imgUrl":"","Place":"Chatrapati Shivaji Maharaj Terminus","Loaction":"Mumbai"},
        {"imgUrl":"","Place":"Dudhsagar Falls","Loaction":"Goa"},
        {"imgUrl":"","Place":"Basilica of Bom Jesus","Loaction":"Goa"},
        {"imgUrl":"","Place":"Aguada Fort","Loaction":"Goa"},
        {"imgUrl":"","Place":"Cubbon Park","Loaction":"Banglore"},
        {"imgUrl":"","Place":"Benguluru Palace","Loaction":"Banglore"},
        {"imgUrl":"","Place":"","Loaction":"Banglore"},
        {"imgUrl":"","Place":"TajMahal","Loaction":"Agra"},
        {"imgUrl":"","Place":"Agra Fort","Loaction":"Agra"},
        {"imgUrl":"","Place":"Taj Museum","Loaction":"Agra"},
        {"imgUrl":"","Place":"Hawa Mahal","Loaction":"Jaipur"},
        {"imgUrl":"","Place":"Jantar Mantar","Loaction":"Jaipur"},
        {"imgUrl":"","Place":"Alber Hall Museum","Loaction":"Jaipur"},
        {"imgUrl":"","Place":"Birla Mandir","Loaction":"Jaipur"},
      ]
    }

  }