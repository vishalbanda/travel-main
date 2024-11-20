import { Component, Input } from '@angular/core';
import { UserSignUp } from '../login/login.component';

@Component({
  selector: 'app-profile-icon',
  templateUrl: './profile-icon.component.html',
  styleUrls: ['./profile-icon.component.css']
})
export class ProfileIconComponent {
 
  // userName: string = 'Banda vishal'; // Input property to get the user's name
  showDetails = false;

    Username:string| null=''
    Email: string| null=''
    Role:string| null=''
  
  getInitial(): string {
     
    let Username = localStorage.getItem('UserName');
    if(Username!=null){
    const names = Username.split(' ');
    if (names.length === 0) return '';
    const firstInitial = names[0].charAt(0).toUpperCase(); // First letter of the first name
    const lastInitial = names[names.length - 1].charAt(0).toUpperCase(); // First letter of the last name
    return `${firstInitial}${lastInitial}`; // Combine initials
   }
   return "User unavailable"
  }


  fetchUserDetails() {
    
    this.showDetails = true
    this.Username = localStorage.getItem('UserName');
    this.Email = localStorage.getItem('UserEmailId');
    this.Role = localStorage.getItem('role');
  }
  // getInitial(): string {
  //   return this.userName.charAt(0).toUpperCase(); // Get the first letter of the user's name
  // }

  onMouseEnter() {
    this.fetchUserDetails(); // Fetch details on mouse enter
    this.showDetails = true; // Show details
  }

  onMouseLeave() {
    this.showDetails = false; // Hide details
  }
  
}
export interface Userdetails {
 
  username: string;
  emial: string;
  role:string;
}


