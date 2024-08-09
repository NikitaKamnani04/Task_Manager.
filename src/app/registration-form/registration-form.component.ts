import { Component, OnInit } from '@angular/core';
import { FormGroup, MinLengthValidator } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { RegistrationServiceService } from '../services/registration-service.service';
// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
})
export class RegistrationFormComponent implements OnInit {
  data: any;
  regform!: FormGroup;
  submitted!: false;
  gender: any;
  selectedStatus: any;
  roles: string | undefined;
  department: string | undefined;
  url: any = '';
  FieldTextType: any;

  onSelectFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event: any) => {
        // called once readAsDataURL is completed
        this.url = event.target.result;
        console.log(this.url);
      };
    }
  }

  toggleFieldTextType() {
    this.FieldTextType = !this.FieldTextType;
  }

  roles_items = [
    { name: 'Hr', value: 1 },
    { name: 'Manager', value: 2 },
    { name: 'Employee', value: 3 },
  ];
  department_items = [
    { name: 'IT', value: 1 },
    { name: 'Production', value: 2 },
    { name: 'Sales', value: 3 },
    { name: 'Digital Marketing', value: 4 },
    { name: 'Research & Development', value: 5 },
    { name: 'Finance', value: 6 },
    { name: 'Administration', value: 7 },
    { name: 'Human Resources', value: 8 },
  ];
  gender_items = ['Male', 'Female'];

  constructor(
    private Regservice: RegistrationServiceService // private route: ActivatedRoute
  ) {
    // this.createFormGroup();
    // this.route.queryParams.subscribe((params) => {
    //   console.log(params);
    //   this.regform.patchValue({ name: params['name'] });
    //   this.regform.patchValue({ email: params['email'] });
    //   this.regform.patchValue({ contact: params['contact'] });
    //   this.regform.patchValue({ password: params['password'] });
    //   this.regform.patchValue({ address: params['address'] });
    //   this.roles = params['roleId'];
    //   this.department = params['deptId'];
    //   this.regform.patchValue({ joinData: params['joinDate'] });
    //   this.regform.patchValue({ gender: params['gender'] });
    //   this.regform.patchValue({ dob: params['dob'] });
    // });
  }

  ngOnInit(): void {
    // this.showData();
    this.createFormGroup();
  }

  createFormGroup() {
    this.regform = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z]+ [a-zA-Z]+$/),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      contact: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]{10}$'),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#\$&*~]).{8,}$/
        ),
      ]),
      address: new FormControl('', [Validators.required]),
      roleId: new FormControl('', [Validators.required]),
      deptId: new FormControl('', [Validators.required]),
      joinDate: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      profile: new FormControl(''),
    });
  }
  AddEmployee() {
    let emp_data = {
      name: this.regform.value.name,
      email: this.regform.value.email,
      contact: this.regform.value.contact,
      password: this.regform.value.password,
      address: this.regform.value.address,
      roleId: this.regform.value.roleId,
      deptId: this.regform.value.deptId,
      joinDate: this.regform.value.joinDate,
      gender: this.regform.value.gender,
      dob: this.regform.value.dob,
    };

    if (this.regform.valid) {
      this.Regservice.getEmployeeData(emp_data).subscribe((res: any) => {
        console.log(res);
      });
    } else {
    }

    console.log(emp_data);

    if (this.regform.valid) {
      this.Regservice.getEmployeeData(emp_data).subscribe((res: any) => {
        // if (res.success == 1) {

        // }
        console.log(res);
        this.regform.reset();
      });
    } else {
      this.regform.markAllAsTouched();
    }
  }

  resetForm() {
    this.regform.reset();
  }
}
