import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {RouteService} from "./service/routes.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  toggleChiSono: boolean = false;

  constructor(private routeService: RouteService) {
  }


}
