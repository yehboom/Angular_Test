import { AboutComponent } from './about/about.component';
import { travelRequest, TravelComponent } from './travel/travel.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'price', component:TravelComponent},
  {path: 'about', component:AboutComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
