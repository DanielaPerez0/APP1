import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./Paginas/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./Paginas/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'resertpassword',
    loadChildren: () => import('./resertpassword/resertpassword.module').then( m => m.ResertpasswordPageModule)
  },
  {
    path: 'resertpassword',
    loadChildren: () => import('./resertpassword/resertpassword.module').then( m => m.ResertpasswordPageModule)
  },
  {
    path: 'resertpassword',
    loadChildren: () => import('./resertpassword/resertpassword.module').then( m => m.ResertpasswordPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
