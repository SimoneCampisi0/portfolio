import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomepageComponent } from './homepage/homepage.component';
import { ChiSonoComponent } from './chi-sono/chi-sono.component';
import { RouteService } from "./service/routes.service";
import { CardSkillComponent } from './chi-sono/components/card-skill/card-skill.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    HomepageComponent,
    ChiSonoComponent,
    CardSkillComponent
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
