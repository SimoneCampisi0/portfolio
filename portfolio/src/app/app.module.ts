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
import { ProgettiComponent } from './progetti/progetti.component';
import {
  ButtonDirective,
  CarouselCaptionComponent,
  CarouselComponent,
  CarouselControlComponent,
  CarouselInnerComponent,
  CarouselItemComponent, FormControlDirective, FormDirective, FormLabelDirective
} from "@coreui/angular";
import {CarouselProgettiComponent} from "./progetti/components/carousel-progetti.component";
import {CommonModule} from "@angular/common";
import {ContattamiComponent} from "./contattami/contattami.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    HomepageComponent,
    ChiSonoComponent,
    CardSkillComponent,
    ProgettiComponent,
    ContattamiComponent

  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselComponent,
    CarouselInnerComponent,
    CarouselItemComponent,
    CarouselControlComponent,
    CarouselCaptionComponent,
    CarouselProgettiComponent,
    FormDirective,
    FormLabelDirective,
    FormControlDirective,
    FormsModule,
    ReactiveFormsModule,
    ButtonDirective,
  ],
  providers: [
    RouteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
