import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  isError = false;
  loading = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  handleLogin() {
    const { email, password } = this.loginForm.value;
    if (email && password) {
      this.loading = true;
      this.authService.login(email, password).subscribe({
        next: (data) => {
          this.loading = false;
          console.log({ data });
        },
        error: (err) => {
          this.loading = false;
          this.isError = true;
        },
      });
    }
  }
}
