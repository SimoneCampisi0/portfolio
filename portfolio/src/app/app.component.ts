import {Component, HostListener, OnInit} from '@angular/core';
import {RouteService} from "./service/routes.service";
import {Router} from "@angular/router";
import {WindowRefService} from "./service/window.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // @ViewChild('homeSection') homeSection: ElementRef | undefined;
  // @ViewChild('chiSonoSection') chiSonoSection: ElementRef | undefined;
  // @ViewChild('progettiSection') progettiSection: ElementRef | undefined;

  title = 'portfolio'
  paginaCambiataManualmente: boolean = false;

  constructor(private routerService: RouteService,
              private router: Router,
              private windowService: WindowRefService) {
    this.updateWindowHeight();
  }

  ngOnInit() {
    this.routerService.cambiaPaginaInCorso$.subscribe((value) => {
      this.paginaCambiataManualmente = value
    })
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateWindowHeight();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if(!this.paginaCambiataManualmente) {
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
    }

    /* aggiungere rotte e regole anche per altri */
  }

  private updateWindowHeight() {
    this.routerService.windowHeight = this.windowService.nativeWindow.innerHeight;
    this.routerService.chiSonoOffset = this.windowService.nativeWindow.innerHeight;
    this.routerService.progettiOffset = (this.windowService.nativeWindow.innerHeight * 2);
  }

}
