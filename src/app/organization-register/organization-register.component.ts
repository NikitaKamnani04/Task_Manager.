import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-organization-register',
  templateUrl: './organization-register.component.html',
  styleUrls: ['./organization-register.component.css']
})
export class OrganizationRegisterComponent implements OnInit {

  registerForm!:FormGroup;
  FieldTextType!:any;
  constructor() { }

  ngOnInit(): void {
    this.registerForm=new FormGroup({
      'name': new FormControl('',Validators.required),
      'email':new FormControl('',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      'mobno':new FormControl('',Validators.required),
      'address':new FormControl('',Validators.required),
      'password':new FormControl('',[Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,18}$')]),
    })
  }

  toggleFieldTextType() {
    this.FieldTextType = !this.FieldTextType;
  }

}
