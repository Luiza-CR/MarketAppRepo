import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/components/pages/home/home.component';
import { LoginComponent } from '../app/components/pages/login/login.component';
import { ShoppingCheckoutComponent } from '../app/components/pages/shopping-checkout/shopping-checkout.component';





const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'shopping-checkout', component: ShoppingCheckoutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
