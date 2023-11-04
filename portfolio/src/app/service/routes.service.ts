import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RouteService {
  homeOffset: number = 0;
  chiSonoOffset: number = 0;

  constructor(private router: Router) {}

  ngOnInit() {
      window.addEventListener('scroll', () => {
          this.onScroll();
      });
  }

  onScroll() { //TODO definire logica per cui, quando si passa da una sezione all'altra, cambi l'URI del sito

  }

  cambiaPagina(pagina: string) {
      switch(pagina) {
          case 'home':
              document.documentElement.scrollTop = 0;
              this.router.navigate(['/home']);
              break;

          case 'chi-sono':
              document.documentElement.scrollTop = this.homeOffset + this.chiSonoOffset;
              this.router.navigate(['/chi-sono']);
              break;
      }

  }


}
