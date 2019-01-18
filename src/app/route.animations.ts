import {
  trigger, transition, query, style, animate
} from '@angular/animations';


export const routeAnimations =
  trigger('routeAnimation', [
    transition('* => *', [
      query(':enter',  [
        style({ opacity: 0, position: 'absolute' })], { optional: true }),
      query(':leave', [
        style({ opacity: 1, position: 'absolute' }),
        animate('0.1s', style({ opacity: 0}))], { optional: true }),
      query(':enter', [
        style({ opacity: 0}),
        animate('0.1s', style({ opacity: 1}))], { optional: true })
    ])
  ]);
