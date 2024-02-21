import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, take, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../common/model/user.model';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

const getUrl = (pathanme: string) =>
  `${environment.firebaseAuthUrl}${pathanme}?key=${environment.firebaseApiKey}`;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = new BehaviorSubject<User | null>(null);
  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(getUrl('signInWithPassword'), {
        email,
        password,
        returnSecureToken: true,
      })
      .pipe(
        take(1),
        tap((response) => {
          this.handleAuthentication(
            email,
            response.localId,
            response.idToken,
            +response.expiresIn
          );
          this.router.navigate(['/']);
        }),
        catchError((err) => {
          const errorType = err.error.error.message;
          let normalizedError = 'An error occured!';
          switch (errorType) {
            case 'INVALID_LOGIN_CREDENTIALS':
              normalizedError = 'Invalid Email or Password!';
              break;
          }
          return throwError(() => normalizedError);
        })
      );
  }

  autoLogin() {
    const authData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    } = localStorage.getItem('auth')
      ? JSON.parse(localStorage.getItem('auth') || '')
      : null;
    if (!authData) {
      return;
    }

    const loadUser = new User(
      authData.email,
      authData.id,
      authData._token,
      new Date(authData._tokenExpirationDate)
    );

    if (loadUser.token) {
      this.user.next(loadUser);
    }
  }

  logout() {
    localStorage.removeItem('auth');
    this.user.next(null);
    this.router.navigate(['auth']);
  }

  private handleAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    this.user.next(user);
    localStorage.setItem('auth', JSON.stringify(user));
  }
}
