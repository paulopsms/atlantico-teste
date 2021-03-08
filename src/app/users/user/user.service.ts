import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user';
import {take} from 'rxjs/operators';

const API = 'http://localhost:8000';

@Injectable({providedIn: 'root'})
export class UserService {

  constructor(private http: HttpClient) {
  }

  listUsers() {
    return this.http
      .get<User[]>(API + '/users');
  }

  getById(id: number) {
    return this.http
      .get<User[]>(API + '/users/' + id).pipe(take(1));
  }
}
