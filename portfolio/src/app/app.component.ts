import {AfterViewInit, Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {RouteService} from "./service/routes.service";
import {Router} from "@angular/router";
import {WindowRefService} from "./service/window.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  // @ViewChild('homeSection') homeSection: ElementRef | undefined;
  // @ViewChild('chiSonoSection') chiSonoSection: ElementRef | undefined;
  // @ViewChild('progettiSection') progettiSection: ElementRef | undefined;

  title = 'portfolio'

  constructor(private routerService: RouteService,
              private router: Router,
              private windowService: WindowRefService) {
    this.updateWindowHeight();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.updateWindowHeight();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    let currentHeight = document.documentElement.scrollTop;

    if (currentHeight >= this.routerService.homeOffset && currentHeight < (this.routerService.chiSonoOffset - 50)) {
      this.router.navigate(['/home']);
    }

    else if (currentHeight >= this.routerService.chiSonoOffset - 50 && currentHeight < (this.routerService.progettiOffset - 50)) {
      this.router.navigate(['/chi-sono']);
    }

    else if(currentHeight >= this.routerService.progettiOffset - 50) {
      this.router.navigate(['/progetti']);
    }

    /* aggiungere rotte e regole anche per altri */
  }

  private updateWindowHeight() {
    this.routerService.windowHeight = this.windowService.nativeWindow.innerHeight;
    this.routerService.chiSonoOffset = this.windowService.nativeWindow.innerHeight;
    this.routerService.progettiOffset = (this.windowService.nativeWindow.innerHeight * 2);
  }

  ngAfterViewInit() {
    // if (this.homeSection && this.chiSonoSection) {
    //   this.routerService.homeOffset = this.homeSection.nativeElement.offsetHeight; //Ottengo l'altezza del componente
    //   this.routerService.chiSonoOffset = this.chiSonoSection.nativeElement.offsetHeight;
    // }
  }
}
