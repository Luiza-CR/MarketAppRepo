import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../app/components/pages/home/header/header/header.component';
import { HomeComponent } from '../app/components/pages/home/home.component';
import { CardComponent } from '../app/components/pages/home/card/card.component';
import { ShoppingCartButtonComponent } from './components/buttons/shopping-cart-button/shopping-cart-button.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PagesComponent } from './components/pages/pages.component';
import { LoginComponent } from './components/pages/login/login.component';
import { ShoppingCheckoutComponent } from './components/pages/shopping-checkout/shopping-checkout.component';
import { NavBarComponent } from '../app/components/pages/home/nav-bar/nav-bar.component';
import { CategMenuComponent } from './components/pages/home/header/categ-menu/categ-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CardComponent,
    ShoppingCartButtonComponent,
    PagesComponent,
    LoginComponent,
    ShoppingCheckoutComponent,
    NavBarComponent,
    CategMenuComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
