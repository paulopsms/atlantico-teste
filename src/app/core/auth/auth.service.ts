import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {UserService} from '../user/user.service';
import {AuthToken} from './authtoken';


// const API_URL = 'http://localhost:3000';
const API_URL = 'http://localhost:8000';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private userService: UserService) {
  }

  // authenticate(userName: string, password: string) {
  //
  //   return this.http
  //     .post(
  //       API_URL + '/user/login',
  //       {userName, password},
  //       {observe: 'response'}
  //     )
  //     .pipe(tap(res => {
  //       const authToken = res.headers.get('x-access-token');
  //       this.userService.setToken(authToken);
  //       console.log(`User ${userName} authenticated with token ${authToken}`);
  //     }));
  // }

  authenticate(username: string, password: string) {

    return this.http
      .post(
        API_URL + '/authenticate',
        {username, password},
        {observe: 'response'}
      )
      .pipe(tap(res => {
        const token = res.body as AuthToken;
        this.userService.setToken(token.token);
        console.log(`User ${username} authenticated with token ${token.token}`);
      }));
  }
}
