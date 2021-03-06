import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {AuthGuard} from '../core/auth/auth.guard';
import {SignUpComponent} from './singup/singup.component';
import {SignInComponent} from './signin/signin.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: SignInComponent,
      },
      {
        path: 'signup',
        component: SignUpComponent,
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild( routes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
