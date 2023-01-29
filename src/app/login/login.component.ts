import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  userForm!:FormGroup;
  
  constructor(private auth:AuthService ,private fb:FormBuilder,private router:Router){
  }

//   signupusers1:any[]=[];
//   login:boolean=false;
  // signupobj:any=
  // {
  // username:'vishal',
  // email:'vishal.banda@gmail.com',
  // password:'1235'
  //    };

//  loginobj:any=
//  {
//   username:'',
//   password:''
//  };
    
 ngOnInit():void
 {
  this.userForm=this.fb.group({
  username1:[''],
  password1:['']
})

 }
//   ngOnInit():void{
//       const localData = localStorage.getItem('signupusers1');
//   if(localData!=null){
//     this.signupusers1 =JSON.parse(localData)
//    }
//   }
//   OnSignUp(){
//   this.signupusers1.push(this.signupobj);
//   localStorage.setItem('signupusers1',JSON.stringify(this.signupusers1));
//   this.signupobj={
//   username:'',
//   email:'',
//   password:''
//  };
//   }
//   OnLogin(){
//     debugger
//     const isUserExist = this.signupusers1.find(m => m.username == this.loginobj.username && m.password==this.loginobj.password);
//     if(isUserExist != undefined ) {
//     alert("user login succesfully")
//   }
//   else if(this.loginobj.username == "" && this.loginobj.password == ""){
//     alert("Enter Details");
//     // this.login=false;
//   }
//   else{
//     alert("user login unsuccessful")
//   }

//   }
OnSignUp(){
//   this.auth.signup(this.userForm.value).subscribe({
//       next:(res)=>
//       {alert(res.message)
//         this.userForm.reset();
//       },
//       error:(err)=>{
//         alert(err?.error.message)
//       }
//   })
}
OnLogin(){
  this.auth.login(this.userForm.value).subscribe({
    next:(res)=>{alert(res.message)
    },
    error:(err)=>{
      alert(err?.error.message)
    }
})
}
 
}
