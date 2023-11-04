import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {RouteService} from "./service/routes.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('homeSection') homeSection: ElementRef | undefined;
  @ViewChild('chiSonoSection') chiSonoSection: ElementRef | undefined;

  title = 'portfolio'

  constructor(private routerService: RouteService) { }

  ngAfterViewInit() {
    if (this.homeSection && this.chiSonoSection) {
      this.routerService.homeOffset = this.homeSection.nativeElement.offsetHeight; //Ottengo l'altezza del componente
      this.routerService.chiSonoOffset = this.chiSonoSection.nativeElement.offsetHeight;
    }
  }
}
