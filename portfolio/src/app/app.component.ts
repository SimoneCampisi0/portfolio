import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('homeSection') homeSection: ElementRef | undefined;
  @ViewChild('chiSonoSection') chiSonoSection: ElementRef | undefined;

  title = 'portfolio'
  homeOffset: number = 0
  chiSonoOffset: number = 0

  constructor(private router: Router) { }

  ngOnInit() {
    window.addEventListener('scroll', () => {
      this.onScroll();
    });
  }

  onScroll() { //TODO: sommare homeOffset + chiSonoOffset a document.documentElement.scrollTop per ottenere le altezze dei vari div in modo dinamico.
    //  Far si che questo metodo sia utilizzabile nell'header.
    // cambiaPagina(pagina: string) {
    //     switch(pagina) {
    //       case 'home':
    //         document.documentElement.scrollTop = 0;
    //         this.router.navigate(['/home']);
    //         break;
    //
    //       case 'chi-sono':
    //         document.documentElement.scrollTop = 800;
    //         this.router.navigate(['/chi-sono']);
    //         break;
    //     }
    //   }
  }

  ngAfterViewInit() {
    if (this.homeSection && this.chiSonoSection) {
      this.homeOffset = this.homeSection.nativeElement.offsetHeight; //Ottengo l'altezza del componente
      this.chiSonoOffset = this.chiSonoSection.nativeElement.offsetHeight;
    }
  }
}
