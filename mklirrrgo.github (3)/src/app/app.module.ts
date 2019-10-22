import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes:Routes = 
[
  {
  path: '',
  component: LoginFormComponent
  },
  {
  path: 'dashboard',
  component: DashboardComponent
  }
]

@NgModule({
  declarations: [ AppComponent, FooterComponent, HeaderComponent, LoginFormComponent, DashboardComponent ],
  imports:[RouterModule.forRoot(appRoutes), BrowserModule],
  providers: [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
