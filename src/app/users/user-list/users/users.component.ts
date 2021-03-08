import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {User} from '../../user/user';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../user/user.service';

@Component({
  selector: 'ap-users',
  templateUrl: './users.component.html',
})
export class UsersComponent implements OnChanges {

  @Input() users: User[] = [];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private userService: UserService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.users) {
      this.userService.listUsers().subscribe(users => this.users = users);
    }
  }

  // onUpdate(userId: number) {
  //   this.router.navigate(['users', userId + '/update'], {relativeTo: this.route});
  // }
}
