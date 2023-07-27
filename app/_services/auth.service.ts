import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private http: HttpClient) { }

  isAuthenticated(): boolean {
    if (sessionStorage.getItem('token') !== null) {
      return true;
    }
    return false;
  }

  canAccess() {
    if (!this.isAuthenticated()) {
      this.router.navigate(['/login']);
    }
  }
  canAuthenticate() {
    if (this.isAuthenticated()) {
      this.router.navigate(['/dashboard']);
    }
  }

  register(name: string, userName: string, password: string) {
    return this.http
      .post<{ Token: string }>(
        'http://192.168.29.118:9004/tm/api/v1/auth/authenticate',
        { displayName: name, userName, password }
      );
  }

  storeToken(token: string) {
    sessionStorage.setItem('token', token);
  }

  login(userName: string, password: string) {
    return this.http
      .post<{ Token: string }>(
        'http://192.168.29.118:9004/tm/api/v1/auth/authenticate',
        { userName, password }
      );
  }

  detail() {
    let token = sessionStorage.getItem('token');

    return this.http.post<{ users: Array<{ localId: string, displayName: string }> }>(
      'http://192.168.29.118:9004/tm/api/v1/auth/authenticate',
      { Token: token }
    );
  }

  removeToken() {
    sessionStorage.removeItem('token');
  }
}