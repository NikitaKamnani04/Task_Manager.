import { Component, OnInit } from '@angular/core';
import { FormGroup, MinLengthValidator } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { RegistrationServiceService } from '../services/registration-service.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
})
export class RegistrationFormComponent implements OnInit {
  data: any;
  form!: FormGroup;
  f: any;
  submitted!: false;
  Username: any;
  reset: any;
  formResetdata: any;
  roles: any = 0;
  onChange: any;
  selectedStatus: any;

  department: number = 0;
  date: string | any;
  roles_items = [
    { name: 'Admin', value: 1 },
    { name: 'Hr', value: 2 },
    { name: 'Employee', value: 3 },
    { name: 'Manager', value: 4 },
  ];
  department_items = [
    { name: 'Marketing', value: 1 },
    { name: 'Sales', value: 2 },
    { name: 'IT', value: 3 },
    { name: 'Digital Marketing', value: 4 },
    { name: 'Maintainance', value: 5 },
    { name: 'Finance', value: 6 },
    { name: 'Human Resources', value: 7 },
    { name: 'Research & Development', value: 8 },
    { name: 'Accounts', value: 9 },
  ];

  constructor(private Regservice: RegistrationServiceService) {}
  ngOnInit(): void {
    this.showData();
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(7)]),
      gender: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      contact: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      address: new FormControl('', [Validators.required]),
      roleId: new FormControl('', [Validators.required]),
      deptId: new FormControl('', [Validators.required]),
      joinDate: new FormControl('', [Validators.required]),
    });
    this.showData();
    
  }

  SignUp() {
    let emp_data = {
      name: this.form.value.name,
      email: this.form.value.email,
      contact: this.form.value.contact,
      password: this.form.value.password,
      address: this.form.value.address,
      roleId: this.roles,
      deptId: this.department,
      joinDate: this.form.value.joinDate,
    };
    console.log(emp_data);

    this.Regservice.getEmployeeData(emp_data).subscribe((res) => {
      console.log(res);
    });
    this.form.reset();
  }
  showData() {
    this.Regservice.fetchData().subscribe((res) => {
      this.data = res;
      // console.log(this.data);
    });
  }
}
