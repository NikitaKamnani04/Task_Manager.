import { Component, OnInit } from '@angular/core';
import {  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,} from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  // resetPasswordForm!:FormBuilder;
  // resetPassword!: FormGroup;
  passwordsMatching = false;
  isConfirmPasswordDirty = false;
  confirmPasswordClass = 'form-control';

  // constructor(private router: Router) {

  // }


  // ngOnInit(): void {
  //   this.resetPassword = new FormGroup({
  //     'newPassword': new FormControl('', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,18}$')]),
  //     'confirmPassword': new FormControl('', [Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,18}$')]),
      
    
  //   }); 
  //   this.resetPassword.reset()
  // }

  


  // checkPasswords(pw: string, cpw: string) {
  //   this.isConfirmPasswordDirty = true;
  //   if (pw == cpw) {
  //     this.passwordsMatching = true;
  //     this.confirmPasswordClass = 'form-control is-valid';
  //   } else {
  //     this.passwordsMatching = false;
  //     this.confirmPasswordClass = 'form-control is-invalid';
  //   }
  // }

  // onSubmit() {
  //   this.router.navigate(['/signin']);
  // }

  // onUrl() {
  //   this.router.navigateByUrl('/signin');
  // }

  // checkValidations(control:any, type:any) {
  //   switch (type) {
  //     case 'special-character':
  //       return /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(control.value);;
  //     case 'number':
  //       return /\d/.test(control.value);
  //     case 'lowercase':
  //       return /[a-z]/.test(control.value);
  //     case 'uppercase':
  //       return /[A-Z]/.test(control.value);
  //     case 'length':
  //       return control.value.length >= 8 && control.value.length <= 16;
  //     default:
  //       return false
  //   }
  // }



  newPassword = new FormControl(null, [
    (c: AbstractControl) => Validators.required(c),
    Validators.pattern(
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/
    ),
  ]);
  confirmPassword = new FormControl(null, [
    (c: AbstractControl) => Validators.required(c),
    Validators.pattern(
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/
    ),
  ]);

  resetPasswordForm = this.formBuilder.group(
    {
      newPassword: this.newPassword,
      confirmPassword: this.confirmPassword,
    },
    {
      validator: this.ConfirmedValidator('newPassword', 'confirmPassword'),
    }
    
  );



  constructor(private formBuilder: FormBuilder,private router:Router) {}


  ngOnInit() {

  }

  // onSubmit(): void {
  //   console.log(this.resetPasswordForm);
  //   if (!this.resetPasswordForm?.valid) {
  //     return;
  //   }
  // }


  ConfirmedValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (
        matchingControl.errors &&
        !matchingControl.errors['confirmedValidator']
      ) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
}



