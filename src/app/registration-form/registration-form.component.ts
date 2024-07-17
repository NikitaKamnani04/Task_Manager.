import { Component, OnInit } from '@angular/core';
import { FormGroup, MinLengthValidator, } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { RegistrationServiceService } from '../services/registration-service.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})

export class RegistrationFormComponent implements OnInit {
  data: any;
  form!: FormGroup
  f: any;
  submitted!: false;
  Username: any;
reset:any;
  SignUpResetdata: any;
Roles: any;


  constructor(private Regservice: RegistrationServiceService) { }

  ngOnInit(): void {
    this.showData()






    this.form = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(7)]),
      email: new FormControl('', [Validators.required]),
      mobile_no: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      address: new FormControl('', [Validators.required]),
      role: new FormControl('', [Validators.required]), 
      dept: new FormControl('', [Validators.required]),
      dateNo: new FormControl('', [Validators.required]),
 

      confirm_pass: new FormControl('', [Validators.required]),
      dept_id: new FormControl('', [Validators.required]),
    });

  }
  showData() {
    this.Regservice.fetchData().subscribe(res => {
      this.data = res;


    })
  }
  SignUp() {
    let emp_data = {
      username: this.form.value.username,
      email:this.form.value.email,
      mobile_no:this.form.value. mobile_no,
      password:this.form.value.password,
      address:this.form.value.address,
      role:this.form.value.role,
      dept:this.form.value.dept,
      dateNo:this.form.value.dateNo,
    }
    this.Regservice.getEmployeeData(emp_data).subscribe((res) => {

      })
     this.form.reset()
  }
}