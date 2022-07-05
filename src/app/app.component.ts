import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, switchMap } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  complementTitle: string = '• Sua floricultura online';
  titleKey: string = '';

  constructor(
    activateRouter: ActivatedRoute,
    router: Router,
    titleService: Title,
  ) {

    router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .pipe(map(() => activateRouter))
      .pipe(map((router) => {
        while (router.firstChild) router = router.firstChild;
        return router;
      }))
      .pipe(switchMap((router) => router.data))
      .subscribe((event) => {
        this.titleKey = event['title'];
        titleService.setTitle(`${event['title']} ${this.complementTitle}`);
      });
  }
}
