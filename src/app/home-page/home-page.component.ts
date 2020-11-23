import { Component, OnInit } from '@angular/core';
import {
  showMainTitle,
  showMainLogo,
  showMainTitleSub,
  aboutImg,
  dividerMain,
} from '../shared/animation/animations';
import * as AOS from 'aos';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [
    showMainTitle,
    showMainLogo,
    showMainTitleSub,
    aboutImg,
    dividerMain,
  ],
})
export class HomePageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  aboutImgDone(event) {
    if (event.toState === null) {
      AOS.init();
    }
  }
}
