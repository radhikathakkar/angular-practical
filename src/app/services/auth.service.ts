import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { User } from '../model/user.model';
import { BASE_URL } from '../shared/baseUrl';
import { Response } from '../shared/response';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { IUser } from '../shared/user.interface';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = `${BASE_URL}/auth`;
  user: IUser = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: '',
    dob: new Date(),
    token: ''
  };
  private currentUser = new BehaviorSubject<IUser>(this.user);
  constructor(private http: HttpClient, private router: Router) {}

  signup(user: User) {
    return this.http.post<Response>(`${this.url}/register`, user);
  }

  login(user: User) {
    return this.http.post<Response>(`${this.url}/login`, user).pipe(
      map((res) => {
        const userData: IUser = this.decodeToken(res.data);
        if (userData) {
          const user = {
            ...userData,
            token: res.data,
          };
          localStorage.setItem('isLoggedIn', 'true');
          this.currentUser?.next(user);
        }
        return userData;
      })
    );
  }

  get getRole(): string{
    return this.currentUser.value.role;
  }

  decodeToken(token: string | any) {
    const decoded: IUser = jwtDecode(token);
    return decoded;
  }

  public get currentUserValue(): any {
    return this.currentUser.value;
  }

  logout() {
    localStorage.clear();
    this.currentUser.next(this.user);
    this.router.navigate([''])
  }
}
