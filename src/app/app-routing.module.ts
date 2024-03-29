import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BookingComponent } from './booking/booking.component';
import { ContactComponent } from './contact/contact.component';
import { EatComponent } from './eat/eat.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PlaceComponent } from './place/place.component';
import { PlayComponent } from './play/play.component';
import { SubwayComponent } from './subway/subway.component';
import { GoaComponent } from './place/goa/goa.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path:'',component:HomeComponent},
  { path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  { path:'contact',component:ContactComponent},
  { path:'place',component:PlaceComponent,
  children: [
    {
      path:'goa1', component: GoaComponent
    }]
  },
  { path:'eats',component:EatComponent},
  { path:'book',component:BookingComponent },        
  { path:'play',component:PlayComponent},
  { path:'subplace',component:SubwayComponent},
  { path:'goa', component: GoaComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
