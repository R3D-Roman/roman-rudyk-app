import { Component, HostListener, OnInit } from '@angular/core';
import {
  showBackdrop,
  showMenuRight,
  showMenuLeft,
  showMainMenu,
  menuLinkOne,
  menuLinkTwo,
  menuLinkThree,
  menuLinkFour,
  firstLineBurger,
  secondLineBurger,
  thirdLineBurger,
} from '../animation/animations';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  animations: [
    showBackdrop,
    showMenuRight,
    showMenuLeft,
    showMainMenu,
    menuLinkOne,
    menuLinkTwo,
    menuLinkThree,
    menuLinkFour,
    firstLineBurger,
    secondLineBurger,
    thirdLineBurger,
  ],
})
export class MainLayoutComponent implements OnInit {
  // animation
  bdropState = 'hide';
  rightMenu = 'out';
  leftMenu = 'out';
  showMainMenu = null;
  showLinkOne = null;
  public innerWidth: any;
  isMobile = false;
  burgerMenuLines = 'normal';
  // end animation

  constructor() {}
  ngOnInit() {
    this.innerWidth = window.innerWidth;

    if (this.innerWidth <= 768) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
      this.showLinkOne = null;
      this.showMainMenu = null;
      document.body.classList.remove('mobile-menu-open');
    }
  }

  // animation
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth <= 768) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
      this.showMainMenu = null;
      this.showLinkOne = null;
      this.rightMenu = 'out';
      this.leftMenu = 'out';
      this.burgerMenuLines = 'normal';
      this.showLinkOne = 'hide';
      document.body.classList.remove('mobile-menu-open');
    }
  }

  showMenu() {
    if (this.isMobile) {
      this.bdropState = 'show';
      !document.body.classList.contains('mobile-menu-open')
        ? document.body.classList.add('mobile-menu-open')
        : document.body.classList.remove('mobile-menu-open');
    }

    this.rightMenu === 'out' && this.isMobile
      ? (this.rightMenu = 'in')
      : (this.rightMenu = 'out');
    this.leftMenu === 'out' && this.isMobile
      ? (this.leftMenu = 'in')
      : (this.leftMenu = 'out');
    this.burgerMenuLines === 'normal' && this.isMobile
      ? (this.burgerMenuLines = 'close')
      : (this.burgerMenuLines = 'normal');
  }

  animationEnded(event) {
    if (event.toState === 'out') {
      this.bdropState = 'hide';
      this.showLinkOne = 'hide';
    } else {
      this.showMainMenu = 'show';
      this.showLinkOne = 'show';
    }
  }

  animationStarted(event) {
    if (event && this.isMobile) {
      this.showMainMenu = 'hide';
    }
  }
  // end animation
}
