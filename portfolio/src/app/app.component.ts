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
    console.log("homeOffset: "+this.routerService.homeOffset+ " chiSono: "+this.routerService.homeOffset)
    console.log("scroll: "+document.documentElement.scrollTop)

    if (document.documentElement.scrollTop <= this.routerService.homeOffset - 10) {
      this.router.navigate(['/home']);
    } else if (document.documentElement.scrollTop <= this.routerService.chiSonoOffset) { //TODO fix this
      this.router.navigate(['/chi-sono']);
    }
  }

  ngAfterViewInit() {
    if (this.homeSection && this.chiSonoSection) {
      this.routerService.homeOffset = this.homeSection.nativeElement.offsetHeight; //Ottengo l'altezza del componente
      this.routerService.chiSonoOffset = this.chiSonoSection.nativeElement.offsetHeight;
    }
  }
}
