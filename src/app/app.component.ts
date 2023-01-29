import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tours';
}
const firebaseConfig = {
  apiKey: "AIzaSyCAG2PonG-ozmBoj1SZDdnUrh0iJcBLeX0",
  authDomain: "loginpage-fdc28.firebaseapp.com",
  projectId: "loginpage-fdc28",
  storageBucket: "loginpage-fdc28.appspot.com",
  messagingSenderId: "141052795765",
  appId: "1:141052795765:web:9bf5f01c25673f46b1d13c"
};
const app = initializeApp(firebaseConfig);