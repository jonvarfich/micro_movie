import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from './login.component';


const routes: Routes = [
    {
      path: 'login',
      children:[
        {
          path: 'login',
          component: LoginComponent
        }
  
      ],
    }
  ]
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class HomeRoutingModule { }
  