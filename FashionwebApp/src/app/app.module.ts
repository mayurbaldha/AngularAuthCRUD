import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { UpdateEventComponent } from './components/update-event/update-event.component';
import { DeleteEventComponent } from './components/delete-event/delete-event.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import {  HttpClientModule  } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    EventListComponent,
    AddEventComponent,
    UpdateEventComponent,
    DeleteEventComponent,
    EventDetailsComponent,
    LandingPageComponent,
  ],
  imports: [
    BrowserModule,FormsModule, ReactiveFormsModule, HttpClientModule ,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatBadgeModule,
    MatListModule,
    MatGridListModule,
    MatSnackBarModule,
    MatTableModule,
    MatDialogModule
  ],
  providers: [FormsModule, ReactiveFormsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
