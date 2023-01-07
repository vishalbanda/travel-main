import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-subway',
  templateUrl: './subway.component.html',
  styleUrls: ['./subway.component.css']
})
export class SubwayComponent {
  subPlacess:any;
  constructor(private _userservices:UserService){

  }
  ngOnInit(): void {
    this.subPlacess=this._userservices.getPlace();
  }

}
