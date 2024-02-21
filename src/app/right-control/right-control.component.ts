import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-right-control',
  templateUrl: './right-control.component.html',
  styleUrls: ['./right-control.component.scss'],
})
export class RightControlComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  handleLogout() {
    this.authService.logout()
  }
}
