import { Component, OnInit } from '@angular/core';


import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  userForm1!:FormGroup;
  constructor(private auth:AuthService ,private fb:FormBuilder,private router:Router){
  }
  ngOnInit():void
  {
   this.userForm1=this.fb.group({
   username:[''],
   password:[''],
   role:[2]
 })
}
  OnSignUp(){
    this.auth.signup(this.userForm1.value).subscribe({
        next:(res)=>
        {alert(res.message)
          this.userForm1.reset();
          this.router.navigate(['login']);
        },
        error:(err)=>{
          alert(err?.error.message)
        }
    })
  }
}
