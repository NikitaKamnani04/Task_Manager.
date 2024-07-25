import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { UserServicesService } from '../services/user-services.service';
@Component({
  selector: 'app-organization-register',
  templateUrl: './organization-register.component.html',
  styleUrls: ['./organization-register.component.css']
})
export class OrganizationRegisterComponent implements OnInit {

  registerForm!:FormGroup;
  FieldTextType!:any;
  constructor(private userService : UserServicesService) { }

  ngOnInit(): void {
    this.registerForm=new FormGroup({
      'name': new FormControl('',Validators.required),
      'email':new FormControl('',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      'mobno':new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      'address':new FormControl('',Validators.required),
      'password':new FormControl('',[Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,18}$')]),
    })
  }

  toggleFieldTextType() {
    this.FieldTextType = !this.FieldTextType;
  }

  orgRegisterData(){
    let orgReg ={
      name : this.registerForm.value.name,
      email : this.registerForm.value.email,
      mobno : this.registerForm.value.mobno,
      address : this.registerForm.value.address,
      password : this.registerForm.value.password
    }
    // console.log(orgReg);
    this.userService.orgRegister(orgReg).subscribe(res=>{
      console.log(res);
    })

    
   
  }
  

}
