import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { Routes } from '@angular/router';
import { HomeRoutingModule} from './login-routing.module'


const routes: Routes = [
  {
    path: '/login',
    component: LoginComponent,
    
    children:[
      {
        path: '/login',
        component: LoginComponent
      }

    ],
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class LoginModule { }
