import {NgModule} from '@angular/core';
import {UserListComponent} from './user-list.component';
import {CommonModule} from '@angular/common';
import {DarkenOnHoverModule} from '../../shared/directives/darken-on-hover/darken-on-hover.module';
import {UsersComponent} from './users/users.component';

@NgModule({
  declarations: [
    UserListComponent,
    UsersComponent,
  ],
  imports: [
    CommonModule,
    DarkenOnHoverModule,
  ]
})
export class UserListModule {

}
