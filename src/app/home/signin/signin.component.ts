import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../core/auth/auth.service';
import {Router} from '@angular/router';
import {PlatformDetectorService} from '../../core/plataform-detector/platform-detector.service';

@Component({
  templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup;
  @ViewChild('loginInput') loginInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
    if (this.platformDetectorService.isPlatformBrowser()) {
      this.loginInput.nativeElement.focus();
    }
  }

  login() {
    const login = this.loginForm.get('login').value;
    const password = this.loginForm.get('password').value;

    this.authService
      .authenticate(login, password)
      .subscribe(
        () => this.router.navigate(['users']),
        err => {
          console.log(err);
          this.loginForm.reset();
          if (this.platformDetectorService.isPlatformBrowser()) {
            this.loginInput.nativeElement.focus();
          }
          alert('Invalid user name or password');
        }
      );
  }
}
