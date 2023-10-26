import { Component, HostListener } from '@angular/core';
import {Router, Routes} from "@angular/router";
import {RouteService} from "./service/routes.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  toggleChiSono: boolean = false;

  constructor(private router: Router, private routeService: RouteService) {
  }

  // @HostListener('window:scroll', ['$event'])
  // onScroll(event: Event): void {
  //   // Qui puoi gestire l'evento di scroll
  //   if(document.documentElement.scrollTop > 500) {
  //     this.router.navigate(['/chi-sono']);
  //   }
  // }
}
