import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routeAnimations } from './route.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    routeAnimations
  ]
})
export class AppComponent {

  mainHeight: number;

  constructor() {}

  routeState(outlet: RouterOutlet): string {
    this.mainHeight = window.innerHeight;
    return outlet.activatedRouteData['title'];
  }
}
