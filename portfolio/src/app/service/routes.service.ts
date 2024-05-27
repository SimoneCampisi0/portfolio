import {HostListener, Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {animate, AnimationBuilder, AnimationPlayer, style} from "@angular/animations";

@Injectable({
  providedIn: 'root',
})
export class RouteService {
  homeOffset: number = 0;
  chiSonoOffset: number = 0;
  progettiOffset: number = 0;
  windowHeight!: number;

  constructor(private router: Router, private animationBuilder: AnimationBuilder
  ) {
  }


  cambiaPagina(pagina: string) {
    switch (pagina) {
      case 'home':
        document.documentElement.scrollTop = 0;
        this.router.navigate(['/home']);
        break;

      case 'chi-sono':
        this.playAnimation().then(() => {
          document.documentElement.scrollTop = this.homeOffset + this.chiSonoOffset;
          this.router.navigate(['/chi-sono']);
        })
        break;

      case 'progetti':
        document.documentElement.scrollTop = this.homeOffset + this.chiSonoOffset + this.progettiOffset;
        this.router.navigate(['/progetti']);
        break;

      case 'contattami':
        break;
    }
  }

  // Funzione per eseguire l'animazione
  private playAnimation(): Promise<void> {
    const animationPlayer: AnimationPlayer = this.animationBuilder.build([
      animate('0.3s ease', style({ opacity: 0 })),
    ]).create(document.documentElement);

    animationPlayer.play();

    return new Promise((resolve) => {
      animationPlayer.onDone(() => {
        resolve();
      });
    });
  }


}
