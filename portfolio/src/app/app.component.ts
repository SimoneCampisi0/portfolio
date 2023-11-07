import {AfterViewInit, Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {RouteService} from "./service/routes.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('homeSection') homeSection: ElementRef | undefined;
  @ViewChild('chiSonoSection') chiSonoSection: ElementRef | undefined;

  title = 'portfolio'

  constructor(private routerService: RouteService, private router: Router) { }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    let currentHeight = document.documentElement.scrollTop;

    if(currentHeight < this.routerService.homeOffset) {
      this.router.navigate(['/home']); // Cambio diretto a '/home'
    }
    if(currentHeight >= this.routerService.homeOffset && currentHeight < (this.routerService.homeOffset + this.routerService.chiSonoOffset)) {
      console.log(document.documentElement.scrollTop)
      console.log(this.routerService.homeOffset + this.routerService.chiSonoOffset)
      this.router.navigate(['/chi-sono']); // Cambio diretto a '/chi-sono'
    }
  }

  ngAfterViewInit() {
    if (this.homeSection && this.chiSonoSection) {
      this.routerService.homeOffset = this.homeSection.nativeElement.offsetHeight; //Ottengo l'altezza del componente
      this.routerService.chiSonoOffset = this.chiSonoSection.nativeElement.offsetHeight;
    }
  }
}
