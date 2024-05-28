import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RouteService {
  homeOffset: number = 0;
  chiSonoOffset: number = 0;
  progettiOffset: number = 0;
  windowHeight!: number;

  constructor(private router: Router) {
  }


  cambiaPagina(pagina: string) {
    let scrollPosition = 0;
    let route = '';
    switch (pagina) {
      case 'home':
        // document.documentElement.scrollTop = 0;
        scrollPosition = 0;
        route = '/home';
        // this.router.navigate(['/home']);
        break;

      case 'chi-sono':
        // document.documentElement.scrollTop = this.homeOffset + this.chiSonoOffset;
        scrollPosition = this.homeOffset + this.chiSonoOffset;
        route = '/chi-sono';
        // this.router.navigate(['/chi-sono']);
        break;

      case 'progetti':
        // document.documentElement.scrollTop = this.homeOffset + this.chiSonoOffset + this.progettiOffset;
        scrollPosition = this.homeOffset + this.chiSonoOffset + this.progettiOffset;
        route = '/progetti';
        // this.router.navigate(['/progetti']);
        break;

      case 'contattami':
        break;
    }
    /* Scroll fino alla posizione indicata in scrollPosition.
        Behavior permette di scegliere quale animazione utilizzare durante lo scorrimento */
    window.scrollTo({top: scrollPosition, behavior: 'smooth'});
    this.router.navigate([route]);
  }


}
