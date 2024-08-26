import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
  constructor(private auth:AuthService ,private fb:FormBuilder,private router:Router){
  }
  sample :any
  ngOnInit():void
  {
    this.auth.setpagenavigationId().subscribe(value =>{
        this.sample = value
        debugger
        console.log(this.sample);})
}

}
