import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PhotoListComponent} from './photos/photo-list/photo-list.component';
import {PhotoFormComponent} from './photos/photo-form/photo-form.component';
import {NotFoundComponent} from './errors/not-found/not-found.component';
import {PhotoListResolver} from './photos/photo-list/photo-list.resolver';
import {UserListComponent} from './users/user-list/user-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'users',
    component: UserListComponent,
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'user/:userName',
    component: PhotoListComponent,
    resolve: {
      photos: PhotoListResolver
    }
  },
  {
    path: 'p/add',
    component: PhotoFormComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

