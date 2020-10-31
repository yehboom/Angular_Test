import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { TravelComponent } from './travel/travel.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: 'price', component:TravelComponent},
  {path: 'about', component:AboutComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    TravelComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
