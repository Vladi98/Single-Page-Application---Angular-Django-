import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FurnituresCarouselComponent } from './furnitures-carousel/furnitures-carousel.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ItemsComponent } from './items/items.component';
import { ChairsComponent } from './categories/chairs/chairs.component';
import { BedsSofasComponent } from './categories/beds-sofas/beds-sofas.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { TablesComponent } from './categories/tables/tables.component';

const routes: Routes = [
  { path: '',
    component:LoginComponent,
    pathMatch: 'full'
  },

  {
    path: 'register',
    component:AuthenticationComponent
  },

  {
    path: 'home',
    component:FurnituresCarouselComponent, canActivate:[AuthGuard]
  },

  {
    path:'about',
    component:AboutusComponent, canActivate:[AuthGuard]
  },
  {
    path:'items',
    component:ItemsComponent, canActivate:[AuthGuard]
  }, 

  {
    path:'categories/chairs',
    component:ChairsComponent, canActivate:[AuthGuard]
  },

  {
    path:'categories/beds and sofas',
    component:BedsSofasComponent, canActivate:[AuthGuard]
  },

  {
    path:'categories/tables',
    component:TablesComponent, canActivate:[AuthGuard]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
