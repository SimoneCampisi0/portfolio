import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class RouteService {
  homeOffset: number = 0;
  chiSonoOffset: number = 0;
  progettiOffset: number = 0;
  contattamiOffset: number = 0;
  // windowHeight!: number;

  cambiaPaginaInCorso$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {
  }


  async cambiaPagina(pagina: string) {
    this.cambiaPaginaInCorso$.next(true);
    let scrollPosition = 0;
    let route = '';
    switch (pagina) {
      case 'home':
        scrollPosition = 0;
        route = '/home';
        break;

      case 'chi-sono':
        scrollPosition = this.chiSonoOffset;
        route = '/chi-sono';
        break;

      case 'progetti':
        scrollPosition = this.progettiOffset;
        route = '/progetti';
        break;

      case 'contattami':
        scrollPosition = this.contattamiOffset;
        route = '/contattami';
        break;
    }
    // Scroll fino alla posizione indicata in scrollPosition. Attende fino al completamento della Promise
    await this.scrollUntilPosition(scrollPosition);
    await this.router.navigate([route]);
    this.cambiaPaginaInCorso$.next(false);  // Imposta su false dopo la navigazione

  }

  scrollUntilPosition(scrollPosition: number): Promise<void> {
    return new Promise((resolve) => {
      window.scrollTo({top: scrollPosition, behavior: 'smooth'});
      const checkScroll = setInterval(() => {
        // Controlla se la posizione di scorrimento corrente è uguale a quella desiderata
        if (window.scrollY === scrollPosition) {
          // Se la posizione di scorrimento è quella desiderata, risolve la promessa e interrompe l'intervallo
          resolve();
          clearInterval(checkScroll);
        }
      }, 100); // Controlla ogni 100 millisecondi
    });
  }


}
