import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full',
  },
  {
    path:'',
    children: [
      {
        path:'home',
        loadChildren: () => import('./views/home/home.module').then(function (m) {
            return m.HomeModule;
          }),
      },
    ],
  },
  
  {path:'login', loadChildren: () => import('./views/login/login.module').then(function (m) {return m.LoginModule;})},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
