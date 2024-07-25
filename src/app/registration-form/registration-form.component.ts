import { Component, OnInit } from '@angular/core';
import { FormGroup, MinLengthValidator } from '@angular/forms';
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

  roles_items = ['Hr', 'Manager', 'Employee'];
  department_items = ['IT', 'Production ', 'Sales', 'Digital Marketing', 'Research & Development', 'Finance', 'Administration', 'Human Resources'];
  gender_items = ['Male', 'Female'];


  constructor(private Regservice: RegistrationServiceService) { }

  ngOnInit(): void {

    this.showData()

    this.regform = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z]+ [a-zA-Z]+$/)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      contact: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{10}$")]),
      password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,12}$/)]),
      address: new FormControl('', [Validators.required]),
      roleId: new FormControl('', [Validators.required]),
      deptId: new FormControl('', [Validators.required]),
      joinDate: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
    });

  }
  showData() {
    this.Regservice.fetchData().subscribe(res => {
      this.data = res;
    })
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
    }
    // console.log(this.regform.valid);

    if (this.regform.valid) {
      this.Regservice.getEmployeeData(emp_data).subscribe((res: any) => {

        // if (res.success == 1) {

        // }
        console.log(res);
      })

    }
    else {
      this.regform.markAllAsTouched();

      // this.resetForm();
    }
  }
  resetForm() {

    this.regform.reset()
  }
}
