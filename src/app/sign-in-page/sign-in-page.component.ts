import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
})
export class SignInPageComponent implements OnInit {

  loginForm!:FormGroup;
  FieldTextType: any;
  passwordForm!:FormGroup;
  resetForm!:FormGroup;

  passwordsMatching = false;
  isConfirmPasswordDirty = false;
  confirmPasswordClass = 'form-control';
  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl('',[Validators.required,Validators.email]),
      'password': new FormControl('', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,18}$')]),
    });
    this.loginForm.reset()

    this.resetForm = new FormGroup({
      'email' : new FormControl('',[Validators.required,Validators.email])
    });
    this.resetForm.reset()

    // this.forgotPassword();
  
}
toggleFieldTextType() {
  this.FieldTextType = !this.FieldTextType;
}





// forgotPassword(){
//   this.passwordForm=new FormGroup({
//       'newPassword' : new FormControl('',[Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,18}$')]),
//       'confirmPassword': new FormControl('',[Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,18}$')]),  
//     });
    
//   }

 


// ConfirmedValidator(controlName: string, matchingControlName: string) {
//   return (formGroup: FormGroup) => {
//     const control = formGroup.controls[controlName];
//     const matchingControl = formGroup.controls[matchingControlName];
//     if (
//       matchingControl.errors &&
//       !matchingControl.errors?.['confirmedValidator']
//     ) {
//       return;
//     }
//     if (control.value !== matchingControl.value) {
//       matchingControl.setErrors({ confirmedValidator: true });
//     } else {
//       matchingControl.setErrors(null);
//     }
//   };
// }
// }

checkPasswords(pw: string, cpw: string) {
  this.isConfirmPasswordDirty = true;
  if (pw == cpw) {
    this.passwordsMatching = true;
    this.confirmPasswordClass = 'form-control is-valid';
  } else {
    this.passwordsMatching = false;
    this.confirmPasswordClass = 'form-control is-invalid';
  }
}
}

