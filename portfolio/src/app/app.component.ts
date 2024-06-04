import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {RouteService} from "./service/routes.service";
import {Router} from "@angular/router";
import {WindowRefService} from "./service/window.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('homeSection') homeSection!: ElementRef;
  @ViewChild('chiSonoSection') chiSonoSection!: ElementRef;
  @ViewChild('progettiSection') progettiSection!: ElementRef;
  @ViewChild('contattamiSection') contattamiSection!: ElementRef;

  title = 'portfolio'
  paginaCambiataManualmente: boolean = false;

  constructor(private routerService: RouteService,
              private router: Router) {
  }

  ngOnInit() {
    this.routerService.cambiaPaginaInCorso$.subscribe((value) => {
      this.paginaCambiataManualmente = value
    })
  }

  ngAfterViewInit() {
    this.updateWindowHeight();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateWindowHeight();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (!this.paginaCambiataManualmente) {
      let currentHeight = document.documentElement.scrollTop;

      if (currentHeight >= this.routerService.homeOffset && currentHeight < (this.routerService.chiSonoOffset - 50)) {
        this.router.navigate(['/home']);
      } else if (currentHeight >= this.routerService.chiSonoOffset - 50 && currentHeight < (this.routerService.progettiOffset - 50)) {
        this.router.navigate(['/chi-sono']);
      } else if (currentHeight >= this.routerService.progettiOffset - 50 && currentHeight < (this.routerService.contattamiOffset - 50)) {
        this.router.navigate(['/progetti']);
      } else if (currentHeight >= this.routerService.contattamiOffset - 50) {
        this.router.navigate(['/contattami']);
      }
    }

    /* aggiungere rotte e regole anche per altri */
  }

  private updateWindowHeight() {
    // this.routerService.windowHeight = this.windowService.nativeWindow.innerHeight;

    this.routerService.homeOffset = this.homeSection.nativeElement.offsetTop;
    this.routerService.chiSonoOffset = this.chiSonoSection.nativeElement.offsetTop;
    this.routerService.progettiOffset = (this.progettiSection.nativeElement.offsetTop);
    this.routerService.contattamiOffset = (this.contattamiSection.nativeElement.offsetTop);
  }

}
