import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-progetti',
  templateUrl: './progetti.component.html',
  styleUrls: ['./progetti.component.css']
})
export class ProgettiComponent implements AfterViewInit, OnDestroy, OnInit {
  carouselPerProject: Map<string, any[]> = new Map<string, any[]>()

  constructor() {}

  ngOnInit(): void {
    this.loadCarousel();
  }

  loadCarousel() {
    let slides = new Array(3).fill({ id: -1, src: '', title: '', subtitle: '' });
    slides[0] = {id: 1,
      src: './assets/elemental/el-1.jpg',
      title: 'Elemental',
      subtitle: 'Un social network realizzato con Spring Boot & Angular.',
      github: 'https://github.com/SimoneCampisi0/elemental'
    }
    slides[1] = {id: 2,
      src: './assets/ecommerce/ecommerce.png',
      title: 'eCommerce',
      subtitle: 'Un social network realizzato con Spring Boot & Angular.',
      github: 'https://github.com/SimoneCampisi0/ecommerce'
    }
    slides[2] = {id: 3,
      src: './assets/elemental/el-3.jpg',
      title: 'CarShop',
      subtitle: 'Un social network realizzato con Spring Boot & Angular.',
      github: 'https://github.com/SimoneCampisi0/CarShopBackup'
    }

    this.carouselPerProject.set('Elemental', slides);
  }

  onItemChange($event: any): void {
    console.log('Carousel onItemChange', $event);
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
  }

}
