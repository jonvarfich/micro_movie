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
        loadChildren: () => import('./auth/home/home.module').then(function (m) {
            return m.HomeModule;
          }),
      },
    ],
  },

  {path:'home',loadChildren: () => import('./auth/home/home.module').then(function (m) {return m.HomeModule;})},

  {path:'login',loadChildren: () => import('./auth/login/login.module').then(function (m) {return m.LoginModule;})},
  
  {path:'register',loadChildren: () => import('./auth/register/register.module').then(function (m) {return m.RegisterModule;})},

  {path:'movies',loadChildren: () => import('./auth/movies/movies.module').then(function (m) {return m.MoviesModule;})},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
