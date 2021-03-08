import {User} from '../user/user';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../user/user.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
})
export class UserListComponent implements OnInit {

  users: User[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.listUsers().subscribe(users => this.users = users);
    console.log('USUARIOS USER LIST COMPONENT: ' + this.users);
  }
}
