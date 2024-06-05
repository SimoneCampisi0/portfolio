import {Component, Input, OnDestroy, OnInit} from "@angular/core";
import {
  CarouselCaptionComponent,
  CarouselComponent, CarouselControlComponent,
  CarouselInnerComponent,
  CarouselItemComponent
} from "@coreui/angular";
import {RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";
import {NewlinePipe} from "../../shared/newline.pipe";

@Component({
  selector: 'carousel-progetti',
  template: `
    <c-carousel [interval]="0">
      <c-carousel-inner>
        <c-carousel-item *ngFor="let slide of slides">
          <img
            [src]="slide.src"
            alt="{{slide.title}}"
            class="d-block w-100"
            loading="lazy"
          />
          <c-carousel-caption class=" d-md-block">
            <h3>{{ slide.title }}</h3>
            <p [innerHTML]="slide.subtitle|newline"></p>
            <div (click)="openGithub(slide.github)">
              <i class="fa-brands fa-github link-social"></i>
            </div>
          </c-carousel-caption>
        </c-carousel-item>
      </c-carousel-inner>
      <c-carousel-control [routerLink] caption="Previous" direction="prev"></c-carousel-control>
      <c-carousel-control [routerLink] caption="Next" direction="next"></c-carousel-control>
    </c-carousel>
  `,
  styles: `
    @media (max-height: 700px) {
      c-carousel {
        height: auto;
      }
    }


    c-carousel-caption {
      color: white !important;
      padding-bottom: 0;
    }

    img {
      opacity: 0.6;
    }

    p {
      font-size: 0.9em;
      margin-bottom: 0;
    }

    c-carousel-control {
      color: white !important;
    }

    .link-social {
      height: 2em;
    }

    .link-social:hover {
      color: var(--secondaryColor) !important;
      cursor: pointer !important;
      transition: 0.2s;
    }
  `
  ,
  standalone: true,
  imports: [
    CarouselComponent,
    CarouselInnerComponent,
    CarouselItemComponent,
    CarouselCaptionComponent,
    CarouselControlComponent,
    RouterLink,
    NgForOf,
    NewlinePipe
  ],

})
export class CarouselProgettiComponent implements OnDestroy, OnInit {
  @Input() slides!: any[]

  constructor() {
  }

  openGithub(link: string) {
    window.location.href = link;
  }

  ngOnInit(): void {
  }

  onItemChange($event: any): void {
  }

  ngOnDestroy(): void {
  }


}
