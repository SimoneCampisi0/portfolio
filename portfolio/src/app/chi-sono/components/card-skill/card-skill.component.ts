import {Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-skill',
  templateUrl: './card-skill.component.html',
  styleUrls: ['./card-skill.component.css']
})
export class CardSkillComponent implements OnInit, OnDestroy {
  @Input() nomeCard!: string;
  @Input() icon!: string;
  @Input() livelloCompetenza!: number; // range 1 - 5
  livelloArr: number[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.getLivelloArr();
  }

  ngOnDestroy(): void {
  }

  getLivelloArr() {
    for (let i = 1; i <= this.livelloCompetenza; i++) {
      this.livelloArr.push(i);
    }

    if (this.livelloArr.length < 5) {
      for (let i = this.livelloArr.length; i < 5; i++) {
        this.livelloArr[i] = (0);
      }
    }
  }

}
