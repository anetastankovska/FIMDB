import { Injectable } from '@angular/core';
import { AuthApiService } from './auth-api.service';
import { LoggerService } from 'src/app/core/services/logger.service';
import { LoginUser, RegisterUser, User } from '../interfaces/user.interface';
import { BehaviorSubject, Observable, catchError, finalize, of, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isFetching = new BehaviorSubject<boolean>(false);
  currentUser$ = new BehaviorSubject<User | null>(null);

  constructor(
    private readonly authApiService: AuthApiService,
    private readonly loggerService: LoggerService,
    private readonly router: Router
  ) { }

  login = (loginData: LoginUser): Observable<User | null> => {
    this.isFetching.next(true);

    return this.authApiService.login(loginData).pipe(
      tap((user) => {
        if (user) {
          // Login successful, update the currentUser to true
          this.currentUser$.next(user);
          this.currentUser$.subscribe(res => console.log(res))
        }
      }),
      catchError((error) => this.handleError(error, null)),
      finalize(() => this.isFetching.next(false))
    );
  }

  register = (registerData: RegisterUser): Observable<User | null> => {
    this.isFetching.next(true);

    return this.authApiService.register(registerData).pipe(
      tap((user) => {
        if (user) {
          // Register successful, update the currentUser to true
          this.currentUser$.next(user);
          this.currentUser$.subscribe(res => console.log(res));
        }
      }),
      catchError((error) => this.handleError(error, null)),
      finalize(() => this.isFetching.next(false))
    );
  }

  logout = () => {
    this.currentUser$.next(null);
    // this.router.navigate(['']);
  }

  private handleError(error: any, returnValue: any): Observable<any> {
    this.loggerService.error(error);
    return of(returnValue);
  }
}
