import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RouteService {
  constructor(private router: Router) {
    window.addEventListener('scroll', () => {
      this.onScroll();
    });
  }

  private onScroll(): void { //TODO: cambiare i pixel con valori relativi all'altezza della finestra in quel momento.
    console.log(document.documentElement.scrollTop)

    if(document.documentElement.scrollTop == 0 || document.documentElement.scrollTop < 600) {
      this.router.navigate(['/home']);
    }

    if(document.documentElement.scrollTop > 600) {
      this.router.navigate(['/chi-sono']);
    }
  }

  cambiaPagina(pagina: string) {
    switch(pagina) {
      case 'home':
        document.documentElement.scrollTop = 0;
        this.router.navigate(['/home']);
        break;

      case 'chi-sono':
        document.documentElement.scrollTop = 800;
        this.router.navigate(['/chi-sono']);
        break;
    }
  }
}
