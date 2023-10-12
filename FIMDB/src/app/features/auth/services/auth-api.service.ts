import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { LoginUser, RegisterUser, User } from "../interfaces/user.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  constructor(private readonly httpClient: HttpClient) { }

  private readonly URL: string = 'http://localhost:4000/api/users';

  login = (loginData: LoginUser): Observable<User> => {
  return this.httpClient.post<User>(`${this.URL}/login`, loginData);
  }

  register = (registerData: RegisterUser): Observable<User> => {
    return this.httpClient.post<User>(`${this.URL}/register`, registerData);
  }
}
