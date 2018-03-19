import {animate, group, query, style} from '@angular/animations';


export const slideLeft = [
  query(':leave', style({ position: 'absolute', left: 0, right: 0, transform: 'translate3d(0%,0,0)' }), {optional: true}),
  query(':enter', style({ position: 'absolute', left: 0, right: 0, transform: 'translate3d(-100%,0,0)' }), {optional: true}),
  group([
    query(':leave', group([
      animate('500ms cubic-bezier(.35,0,.25,1)', style({ transform: 'translate3d(100%,0,0)' })), // y: '-100%'
    ]), {optional: true}),
    query(':enter', group([
      animate('500ms cubic-bezier(.35,0,.25,1)', style({ transform: 'translate3d(0%,0,0)' })),
    ]), {optional: true})
  ])
];

export const slideRight = [
  query(':leave', style({ position: 'absolute', left: 0, right: 0, transform: 'translate3d(0%,0,0)'}), {optional: true}),
  query(':enter', style({ position: 'absolute', left: 0, right: 0, transform: 'translate3d(100%,0,0)'}), {optional: true}),

  group([
    query(':leave', group([
      animate('500ms cubic-bezier(.35,0,.25,1)', style({ transform: 'translate3d(-100%,0,0)' })), // y: '-100%'
    ]), {optional: true}),
    query(':enter', group([
      animate('500ms cubic-bezier(.35,0,.25,1)', style({ transform: 'translate3d(0%,0,0)' })),
    ]), {optional: true})
  ])
];

// export const fadeInAnimation =
//   trigger('fadeInAnimation', [
//     // route 'enter' transition
//     transition(':enter', [
//
//       // styles at start of transition
//       style({ opacity: 0 }),
//
//       // animation and styles at end of transition
//       animate('.3s', style({ opacity: 1 }))
//     ]),
//   ]);

export const fadeInAnimation = [

  // styles at start of transition
  style({ opacity: 0 }),

  // animation and styles at end of transition
  animate('.3s', style({ opacity: 1 }))
];
