import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServicesService } from '../services/user-services.service';

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
  
  constructor(private userService: UserServicesService) { }

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

loginUser(){   //make the function for login sucessfully
  let loginCred = {
    email : this.loginForm.value.email,
    password: this.loginForm.value.password
  }
  // console.log(loginCred);
  
  this.userService.loginData(loginCred).subscribe(res=>{
    console.log(res); 
  })
}

forgotPassword(){      //for reset sucessfully
  let forgotPass = {
        email: this.resetForm.value.email,
  }
  console.log(forgotPass);
}
}

