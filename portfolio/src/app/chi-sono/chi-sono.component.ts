import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-chi-sono',
  templateUrl: './chi-sono.component.html',
  styleUrls: ['./chi-sono.component.css']
})
export class ChiSonoComponent implements OnInit, OnDestroy{
  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  redirectToLinkedin() {
    console.log("entro")
    window.location.href = 'https://www.linkedin.com/in/simone-campisi-b659b91ab/';
  }

  redirectToGithub() {
    window.location.href = 'https://github.com/SimoneCampisi0';
  }

}
