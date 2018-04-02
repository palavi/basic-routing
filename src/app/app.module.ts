import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { homeComponent } from './home.component';
import { loginComponent } from './login.component';
import { signupComponent } from './signup.component';
import { pagenotfoundComponent } from './pagenotfound.component';

const AppRoutes:Routes = [
  { path:'login', component:loginComponent},
  { path:'home', component:homeComponent},
  { path:'signup', component:signupComponent},
  { path:'', redirectTo:'/home', pathMatch:'full'},
  { path:'**', component:pagenotfoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    homeComponent,
    loginComponent,
    signupComponent,
    pagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
