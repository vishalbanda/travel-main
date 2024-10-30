import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';


import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  userForm: FormGroup;
  UserSignUp:UserSignUp={
    username:'',
    useremail:'',
    password: '',
    roleId:''
  };
  UserRoles:UserRoles[]=[];

  Userlogin:UserLogin={
    username:'',
    password: ''
  };

  sample:any
  constructor(private auth:AuthService ,private fb:FormBuilder,private router:Router,private toastr: ToastrService){
    this.userForm= this.fb.group({
      usersignup: this.fb.group({
        username:['',Validators.required],
        useremail:['', [Validators.required, Validators.email]],
        password:['',Validators.required],
        roleId:[''  ,Validators.required]
      }),
      userlogin: this.fb.group({
        username1:['',Validators.required],
        password1:['',Validators.required],
      })
    });
  }
 

 
    
 ngOnInit():void
 {
   this.auth.GetRoles().subscribe(x=>{
    console.log(x);
    debugger
    this.UserRoles = x; 
    console.log(this.UserRoles);
    
    debugger
    
    
   })

  // this.auth.setpagenavigationId().subscribe(value =>{
  //   this.sample = value
  //   debugger
  //   console.log(this.sample);})


  // this.auth.cart$.subscribe(value =>{
  //   this.sample = value
  //   debugger
  //   console.log(this.sample);  
// });

 }


OnSignUp(){
  debugger
  this.toastr.success('Succesfully signed!');
  this.UserSignUp.username= this.userForm.get('usersignup.username')?.value;
  this.UserSignUp.useremail= this.userForm.get('usersignup.useremail')?.value;
  this.UserSignUp.password= this.userForm.get('usersignup.password')?.value;
  this.UserSignUp.roleId= this.userForm.get('usersignup.roleId')?.value;

  this.auth.signup(this.UserSignUp).subscribe({
    next: (res) => {
      console.log('Signup response:', res); 
      alert('Signup successful!'); // Notify user of success
      this.userForm.reset(); // Reset the form
      this.router.navigateByUrl('/Login');
    },
    error: (err) => {
      console.error(err);
      alert('Signup failed. Please try again.'); // Notify user of error
    }
  });
  
  
}


OnLogin(){
 
  this.Userlogin.username= this.userForm.get('userlogin.username1')?.value;
  this.Userlogin.password= this.userForm.get('userlogin.password1')?.value;

  this.auth.login(this.Userlogin).subscribe({
    next:(res)=>{
      this.sample=res.token;
      
      localStorage.setItem('authtoken',this.sample)
      localStorage.setItem('role',res.userdetails.roleName)
      localStorage.setItem('UserName',res.userdetails.username)
      localStorage.setItem('UserEmailId',res.userdetails.useremail)
      this.router.navigateByUrl('/play');
    },
})


}
 
}
export interface UserSignUp {
 
  username: string;
  useremail:string;
  password: string;
  roleId: string;
}
export interface UserLogin {
 
  username: string;
  password: string;
}
export interface UserRoles {
 
  roleId: string;
  role: string;
}


