import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  routeLinks: Array<{ path: string, title: string }> = [];

  constructor(private router: Router) { }

  ngOnInit() {
    // Get data from routing.
    const routeConf = this.router.config;
    for (const route of routeConf) {
      if (route.data && route.data['title']) {
        this.routeLinks.push({
          path: '/' + route.path, title: route.data['title']
        });
      } else {
        continue;
      }
    }
  }

  linkScroll() {
    window.scroll(0, 0);
  }
}
