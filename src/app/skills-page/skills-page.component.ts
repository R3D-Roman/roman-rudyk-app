import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {
  MatProgressBar,
  ProgressBarMode,
} from '@angular/material/progress-bar';
import { interval, Subject } from 'rxjs';
import { delay, take, takeUntil } from 'rxjs/operators';
import * as AOS from 'aos';
import { flippingCard } from '../shared/animation/animations';
import { skills } from '../shared/db/db';
import { Skills } from '../shared/interfaces';

@Component({
  selector: 'app-skills-page',
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.scss'],
  animations: [flippingCard],
})
export class SkillsPageComponent implements OnInit, OnDestroy {
  mode: ProgressBarMode = 'determinate';
  value = 0;
  timer = interval(70);
  intervalDestroyed$: Subject<boolean> = new Subject();
  fliped = 'normal';
  hideProgress = true;
  index: number = null;
  skillsDB: Skills[] = [];

  @ViewChild('progressBar', { static: false }) progressBar: MatProgressBar;
  constructor() {}

  ngOnInit(): void {
    this.skillsDB = skills.map((skill, index) => {
      return {
        ...skill,
        id: index,
        animation: 'normal',
      };
    });
    this.timer
      .pipe(delay(1500), take(81), takeUntil(this.intervalDestroyed$))
      .subscribe((value) => {
        this.hideProgress = false;
        this.value = value;
        this.skillsDB.forEach((skill) => {
          if (value === 80 && skill.progressLevel === 'level-8') {
            skill.progressLevel = value;
          } else if (value === 70 && skill.progressLevel === 'level-7') {
            skill.progressLevel = value;
          } else if (value === 60 && skill.progressLevel === 'level-6') {
            skill.progressLevel = value;
          } else if (value === 50 && skill.progressLevel === 'level-5') {
            skill.progressLevel = value;
          }
        });
      });
    AOS.init();
  }

  ngOnDestroy() {
    this.intervalDestroyed$.next(true);
    this.intervalDestroyed$.complete();
  }

  flipAnime(id: number) {
    this.skillsDB[id].animation === 'normal'
      ? (this.skillsDB[id].animation = 'flip')
      : (this.skillsDB[id].animation = 'normal');
  }
}
