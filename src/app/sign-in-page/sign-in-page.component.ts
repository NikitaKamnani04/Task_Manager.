import { Component, OnInit, Type } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServicesService } from '../services/user-services.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { state } from '@angular/animations';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css'],
  providers: [MessageService],
})
export class SignInPageComponent implements OnInit {
  loginForm!: FormGroup;
  FieldTextType: any;
  passwordForm!: FormGroup;
  resetForm!: FormGroup;
  passwordsMatching = false;
  isConfirmPasswordDirty = false;
  confirmPasswordClass = 'form-control';
  signInRes: any;
  // public isLoggedIn$: BehaviorSubject<boolean>;

  constructor(
    private userService: UserServicesService,
    private Router: Router,
    private messageService: MessageService,

  ) {
    // to restrict the signIn route if the user is successfully logged In
    if (localStorage.getItem('islogin') === '1') {
      Router.navigate(['/dashboard']);
    }
  }

  ngOnInit(): void {



    
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,18}$'
        ),
      ]),
    });
    this.loginForm.reset();

    this.resetForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
    this.resetForm.reset();

    // this.forgotPassword();
    // this.loginForm.patchValue({
    //   email: this.cookieService.get('email'),
    //   password: this.cookieService.get('password'),
    // });
  }
  toggleFieldTextType() {
    this.FieldTextType = !this.FieldTextType;
  }
  isChecked: boolean = true;
  loginUser() {
    //make the function for login sucessfully
    let loginCred = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };

    // console.log(loginCred);
    this.userService.loginData(loginCred).subscribe(
      (res: any) => {
        this.signInRes = res;
        console.log(this.signInRes);
        if (this.signInRes.success === 1) {
          this.messageService.add({
            severity: 'success',
            detail: 'Login successful',
          });

          localStorage.setItem('islogin', this.signInRes.success);

          setTimeout(() => {
            this.Router.navigateByUrl('/dashboard', { state: this.signInRes });
          }, 2000);
        } else {
          this.Router.navigate(['/', 'signin']);
          this.messageService.add({
            severity: 'error',
            summary: 'Login Fail',
            detail: 'Incorrect Credentials',
          });
        }
      },
      (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Incorrect Username and Password',
          detail: 'something went wrong',
        });
      }
    );

  }

  
}
