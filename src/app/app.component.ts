import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  isLoggedIn = false;
  authService$!: Subscription;
  constructor(private authService: AuthService) {}

  ngOnDestroy(): void {
    this.authService$.unsubscribe();
  }

  ngOnInit(): void {
    this.authService.autoLogin();
    this.authService$ = this.authService.user.subscribe(
      (data) => (this.isLoggedIn = !!data)
    );
  }
}
