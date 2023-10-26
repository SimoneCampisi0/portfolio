import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomepageComponent } from './homepage/homepage.component';
import { ChiSonoComponent } from './chi-sono/chi-sono.component';
import { RouteService } from "./service/routes.service";


@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    HomepageComponent,
    ChiSonoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    RouteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
