import {Component} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";
import {RouteService} from "../service/routes.service";

const enterTransition = transition(':enter', [
  style({
    opacity: 0
  }),
  animate('0.2s ease-in', style({opacity: 1}))
])
const exitTransition = transition(':leave', [
  style({
    opacity: 1
  }),
  animate('0.2s ease-out', style({opacity: 0}))
])
const fadeIn = trigger('fadeIn', [enterTransition])
const fadeOut = trigger('fadeOut', [exitTransition])

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css'],
  animations: [fadeIn, fadeOut]
})
export class HeaderMenuComponent {
  svgData: string = '../../assets/list.svg'

  isMobileMenuOpen = false;

  constructor(private routeService: RouteService) {
  }

  apriMenuMobile() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen
    console.log(this.isMobileMenuOpen)
  }

  cambiaPagina(pagina: string) {
    this.routeService.cambiaPagina(pagina)
  }
}
