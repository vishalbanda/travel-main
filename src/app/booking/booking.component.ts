import { Component,Input, OnInit } from '@angular/core';
import { User } from '../booking';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';
import { KeyValuePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  public store:any;
  submitted:boolean =false;
  // name:any="vishal"
  // email:any;
  // phone1:number=9848377325;
  userModel=new User('vishal','vishalbanda@gmail.com',1234567890,'default','','','');
  topicHasError:boolean = false;

 topics =[ 'Google pay','Phone pay','PayPal'];
 
 onSubmit(userForm:any){
  console.log(userForm);
  this.submitted=true
      }
 validateTopic(value:any){
  if( value === 'default')
  {
   this.topicHasError= true;
  }
 else
  {
   this.topicHasError=false;
  }
 }

 constructor(private http:HttpClient, private _userService: UserService){}
 
getdata(postData:any){
  this.http.post('https://packup-34a17-default-rtdb.firebaseio.com/user.json',postData).subscribe();

  console.log(postData)
//   let url='https://cooking-4ebd7-default-rtdb.firebaseio.com/users.json'
//   this.http.post(url,{
//     userModel:this.userModel
//   }).toPromise().then((data:any)=>{console.log(data)})

}

// returnData():Observable<User[]>{
//   return this.http.get<User[]>('https://cooking-4ebd7-default-rtdb.firebaseio.com/users.json')
 
// }
// calldata(){
// this.returnData().subscribe(data => this.store=data)
// constructor(private http:HttpClient ){}
// }
// keydata=[]

ngOnInit(): void {
  // this.returnData();
}

calldata(){
  this._userService.returnData()
  .subscribe((data) => {
    this.store = data;
    console.log(data);
  })
}

}


