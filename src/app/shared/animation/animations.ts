import {
  trigger,
  transition,
  state,
  style,
  animate,
} from '@angular/animations';

export const showBackdrop = trigger('showBackdrop', [
  state(
    'show',
    style({
      opacity: 1,
      display: 'block',
    })
  ),
  state(
    'hide',
    style({
      opacity: 0,
      display: 'none',
    })
  ),

  transition('void => show', animate(150)),
  transition('show =>  hide', animate(300)),
]);

export const showMenuRight = trigger('showMenuRight', [
  state(
    'in',
    style({
      transform: 'translateX(0)',
      height: '25vh',
    })
  ),
  state(
    'out',
    style({
      transform: 'translateX(100vw)',
      height: '25vh',
    })
  ),
  transition('in <=> out', animate(500)),
]);

export const showMenuLeft = trigger('showMenuLeft', [
  state(
    'in',
    style({
      transform: 'translateX(0)',
      height: '25vh',
    })
  ),
  state(
    'out',
    style({
      transform: 'translateX(-100vw)',
      height: '25vh',
    })
  ),
  transition('in <=> out', animate(500)),
]);

export const showMainMenu = trigger('showMainMenu', [
  state(
    'show',
    style({
      opacity: 1,
      display: 'block',
    })
  ),
  state(
    'hide',
    style({
      opacity: 0,
      display: 'none',
    })
  ),

  transition('void => show', animate(100)),
]);

export const menuLinkOne = trigger('menuLinkOne', [
  state(
    'show',
    style({
      opacity: 1,
    })
  ),
  state(
    'hide',
    style({
      opacity: 0,
    })
  ),
  transition('hide => *', animate('200ms ease-in')),
]);

export const menuLinkTwo = trigger('menuLinkTwo', [
  state(
    'show',
    style({
      opacity: 1,
    })
  ),
  state(
    'hide',
    style({
      opacity: 0,
    })
  ),
  transition('hide => *', animate('200ms 200ms ease-in')),
]);

export const menuLinkThree = trigger('menuLinkThree', [
  state(
    'show',
    style({
      opacity: 1,
    })
  ),
  state(
    'hide',
    style({
      opacity: 0,
    })
  ),
  transition('hide => *', animate('200ms 600ms ease-in')),
]);

export const menuLinkFour = trigger('menuLinkFour', [
  state(
    'show',
    style({
      opacity: 1,
    })
  ),
  state(
    'hide',
    style({
      opacity: 0,
    })
  ),
  transition('hide => *', animate('200ms 1000ms ease-in')),
]);

export const firstLineBurger = trigger('firstLineBurger', [
  state(
    'normal',
    style({
      transform: 'rotate(0deg) translate(0, 0)',
    })
  ),
  state(
    'close',
    style({
      transform: 'rotate(-45deg) translate(-5px, 6px)',
    })
  ),

  transition('normal <=> close', animate(500)),
]);

export const secondLineBurger = trigger('secondLineBurger', [
  state(
    'normal',
    style({
      opacity: 1,
    })
  ),
  state(
    'close',
    style({
      opacity: 0,
    })
  ),

  transition('normal <=> close', animate(500)),
]);

export const thirdLineBurger = trigger('thirdLineBurger', [
  state(
    'normal',
    style({
      transform: 'rotate(0deg) translate(0, 0)',
    })
  ),
  state(
    'close',
    style({
      transform: 'rotate(45deg) translate(-5px, -6px)',
    })
  ),

  transition('normal <=> close', animate(500)),
]);

export const showMainTitle = trigger('showMainTitle', [
  transition('* => *', [
    style({
      transform: 'translateY(150%)',
    }),
    animate('1s 0.5s ease-out'),
  ]),
]);

export const showMainTitleSub = trigger('showMainTitleSub', [
  transition('* => *', [
    style({
      transform: 'translateY(150%)',
    }),
    animate('0.8s 1.2s ease-out'),
  ]),
]);

export const showMainLogo = trigger('showMainLogo', [
  transition('* => *', [
    style({
      opacity: 0,
    }),
    animate('1s 2.3s ease-out'),
  ]),
]);

export const aboutImg = trigger('aboutImg', [
  transition('* => *', [
    style({
      opacity: 0,
    }),
    animate('1s 3.3s ease-out'),
  ]),
]);

export const dividerMain = trigger('dividerMain', [
  transition('* => *', [
    style({
      opacity: 0,
    }),
    animate('1s 3s ease-out'),
  ]),
]);

export const flippingCard = trigger('flippingCard', [
  state(
    'normal',
    style({
      transform: 'rotateX(0deg)',
    })
  ),
  state(
    'flip',
    style({
      transform: 'rotateX(180deg)',
    })
  ),

  transition('normal <=> flip', animate(500)),
]);

export const contactFormSend = trigger('contactFormSend', [
  state(
    'true',
    style({
      opacity: 0,
    })
  ),
  state(
    'false',
    style({
      opacity: 1,
    })
  ),
  transition('false => true', animate('800ms ease-out')),
]);
