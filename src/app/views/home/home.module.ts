import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Routes } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';


const routes: Routes = [
  {
    path: '',
    children:[
      {
        path: '',
        component: HomeComponent
      }

    ],
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
})
export class HomeModule { }
