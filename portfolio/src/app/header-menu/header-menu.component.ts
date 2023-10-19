import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent {
  svgData: string = '../../assets/list.svg'

  isMobileMenuOpen = false;

  apriMenuMobile() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen
    console.log(this.isMobileMenuOpen)
  }
}
