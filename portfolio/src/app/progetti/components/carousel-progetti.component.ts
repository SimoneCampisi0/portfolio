import {AfterViewInit, Component, Input, OnDestroy, OnInit} from "@angular/core";
import {
  CarouselCaptionComponent,
  CarouselComponent, CarouselControlComponent,
  CarouselInnerComponent,
  CarouselItemComponent
} from "@coreui/angular";
import {RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";

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
            <p>{{ slide.subtitle }}</p>
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
  styles: `c-carousel-caption {
    color: white !important;
  }

  img {
    opacity: 0.6;
  }

  c-carousel-control {
    color: white !important;
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
    NgForOf
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
    console.log("slides in input: ", this.slides)
  }

  onItemChange($event: any): void {
    console.log('Carousel onItemChange', $event);
  }

  ngOnDestroy(): void {
  }



}
