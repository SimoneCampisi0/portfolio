import {HostListener, Injectable} from '@angular/core';
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
    switch (pagina) {
      case 'home':
        document.documentElement.scrollTop = 0;
        this.router.navigate(['/home']);
        break;

      case 'chi-sono':
        document.documentElement.scrollTop = this.homeOffset + this.chiSonoOffset;
        this.router.navigate(['/chi-sono']);
        break;

      case 'progetti':
        break;

      case 'contattami':
        break;
    }
  }


}
