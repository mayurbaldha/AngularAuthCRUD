import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './auth/auth-guard.service';
import { AddEventComponent } from './components/add-event/add-event.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UpdateEventComponent } from './components/update-event/update-event.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'event-list',canActivate: [AuthGuardService] ,component:EventListComponent},
  {path:'add-event',canActivate: [AuthGuardService] ,component:AddEventComponent},
  {path:'event-details',canActivate: [AuthGuardService] ,component:EventDetailsComponent},
  {path:'update-event',canActivate: [AuthGuardService] ,component:UpdateEventComponent},
  {path:'',component:LandingPageComponent},
  {path:'landing',component:LandingPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
