import {animate, state, style, transition, trigger, useAnimation} from "@angular/animations";
import {
  bounceOutDown,
  fadeInDown,
  fadeInLeft, fadeInRight,
  flipInX,
  flipInY,
  flipOutY, zoomOut
} from "ng-animate";


export const SliderAnimate = trigger('search', [
  state('end', style({
    top: '120px',
    height: '600px'
  })),
  transition(':enter', [
    animate(200, style({background: '#1f1f1f', opacity: '0', height: '200px'})),
    animate(500)
  ]),
  transition(':leave', [
    animate(200, style({opacity: '0.8', height: '600px', top: '120px'})),
    animate(500)
  ]),
])

export const AuthEnter = trigger('enter', [transition('void => *',
  useAnimation(fadeInDown, {
    params: {
      timing: 0.45
    }
  }))]
)

export const PostsEnter = trigger('bounce', [transition('void => *',
  useAnimation(flipInY))])
export const PostsLeave = trigger('bounceLeave', [transition('* => void',
  useAnimation(flipOutY, {
    params: {
      timing: 0.5
    }
  }))])

export const AuthLeave = trigger('leave', [transition('* => void',
  useAnimation(bounceOutDown, {
    params: {
      timing: 0.2
    }
  }))]
)

export const AuthEnterError = trigger('enterError', [transition('void => *',
  useAnimation(fadeInLeft, {
    params: {
      timing: 0.45
    }
  }))]
)
export const AlertDeleteEnter = trigger('alertDeleteEnter', [transition('void => *',
  useAnimation(fadeInDown, {
    params: {
      timing: 0.45
    }
  }))]
)
export const loadEnter = trigger('loadEnter', [transition('void => *',
  useAnimation(flipInX, {
    params: {
      timing: 0.2
    }
  }))]
)
export const AlertEnter = trigger('alertEnter', [transition('void => *',
  useAnimation(fadeInRight))]
)
export const AlertLeave = trigger('alertLeave', [transition('* => void',
  useAnimation(zoomOut,))]
)

