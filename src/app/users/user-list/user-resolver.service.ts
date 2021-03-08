import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {User} from '../user/user';
import {Injectable} from '@angular/core';
import {UserService} from '../user/user.service';

@Injectable({providedIn: 'root'})
export class UserResolver implements Resolve<Observable<User[]>> {

  constructor(private userService: UserService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Observable<User[]>>
    | Promise<Observable<User[]>> | Observable<User[]> {
    if (route.params && route.params['id']) {
      return this.userService.getById(route.params['id']);
    }
  }

}
