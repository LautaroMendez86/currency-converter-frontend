import { Component, inject } from '@angular/core';
import { AuthService } from './services/auth.service';
import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  authService = inject(AuthService)
  title = 'clase-03';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
