import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';

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
  
  {path:'login', component:LoginComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
