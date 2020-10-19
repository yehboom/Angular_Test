import { travelRequest, TravelComponent } from './travel/travel.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'first-component', component: travelRequest },
  ]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

const routesConfig: Routes = [
  { path: 'Travel',     component: TravelComponent}
  ]
