import {Component, ElementRef, ViewChild} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";

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

  apriMenuMobile() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen
    console.log(this.isMobileMenuOpen)
  }
}
