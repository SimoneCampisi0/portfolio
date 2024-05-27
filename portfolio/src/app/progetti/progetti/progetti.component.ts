import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-progetti',
  templateUrl: './progetti.component.html',
  styleUrls: ['./progetti.component.css']
})
export class ProgettiComponent implements AfterViewInit, OnDestroy, OnInit {

  slides = [
    {img: "http://placehold.it/350x150/000000"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/666666"}
  ];
  slideConfig = {"slidesToShow": 4, "slidesToScroll": 4};

  constructor() {

  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
  }

}
