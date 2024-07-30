import { Employee } from './../models/models.model';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminPanelServiceService } from './../services/admin-panel-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Validators } from '@angular/forms';
import { RegistrationServiceService } from '../services/registration-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
})
export class AdminPanelComponent implements OnInit {
  empInfo: any = [];
  deleteEmpInfo: any = [];
  searchText: any;
  editForm!: FormGroup;
  empId: any;
  toggleAddEmployeeForm: boolean = false;
  toggleAdminPanel: boolean = true;
  toggleUpdateEmployeeForm: boolean = false;

  // Add Employee
  data: any;
  regform!: FormGroup;
  submitted!: false;
  selectedStatus: any;
  roles: any = null;
  department: any = null;
  gender: any = null;
  url: any = '';
  FieldTextType: any;
  // End of Employee Form

  // Update Employee Details
  updateForm!: FormGroup;

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
    { name: 'Hr', value: 2 },
    { name: 'Admin', value: 1 },
    { name: 'Employee', value: 3 },
    { name: 'Manager', value: 4 },
  ];
  department_items = [
    { name: 'Digital Marketing', value: 1 },
    { name: 'Sales', value: 2 },
    { name: 'IT', value: 3 },
    { name: 'Marketing', value: 4 },
    { name: 'Maintenance', value: 5 },
    { name: 'Finance', value: 6 },
    { name: 'Human Resources', value: 7 },
    { name: 'Research & Development', value: 8 },
    { name: 'Accounts', value: 9 },
    { name: 'Admin', value: 10 },
  ];
  gender_items = ['Male', 'Female'];

  constructor(
    private AdminPanelServiceService: AdminPanelServiceService,
    private Regservice: RegistrationServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.showEmpDetail();
    this.createFormGroup();
    // this.updateFormDetails();
  }
  showEmpDetail() {
    this.AdminPanelServiceService.empDetail().subscribe((data) => {
      this.empInfo = data.data;
      // console.log(this.empInfo);
    });
  }
  empData(data: any) {
    this.deleteEmpInfo = data;
    console.log(data);
  }
  deleteEmpDetail() {
    this.AdminPanelServiceService.deleteEmpDetail(
      this.deleteEmpInfo.id
    ).subscribe((data) => {
      console.log(data);

      this.showEmpDetail();
    });
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
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,12}$/
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

    // Update Form Details
    this.updateForm = new FormGroup({
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
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,12}$/
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

      // this.resetForm();
    }
  }
  resetForm() {
    this.regform.reset();
  }

  addEmployee() {
    this.toggleAddEmployeeForm = !this.toggleAddEmployeeForm;
    this.toggleAdminPanel = !this.toggleAdminPanel;
  }

  patchFormData(data: any) {
    this.toggleUpdateEmployeeForm = !this.toggleUpdateEmployeeForm;
    this.toggleAdminPanel = !this.toggleAdminPanel;
    console.log(data);
    this.roles = data.roleId;
    this.department = data.deptId;
    this.gender = data.gender;
    console.log(this.gender);

    this.updateForm.patchValue({
      name: data.name,
      email: data.email,
      contact: data.contact,
      password: data.password,
      address: data.address,
      roleId: this.roles,
      deptId: this.department,
      joinDate: data.joinDate,
      // gender: this.gender,
      dob: data.dob,
    });
  }
  adminPage() {
    this.updateForm.reset();
    this.toggleUpdateEmployeeForm = !this.toggleUpdateEmployeeForm;
    this.toggleAdminPanel = !this.toggleAdminPanel;
  }

  // patchEmpData(data: any) {
  //   console.log(data);
  //   this.empId = data.id;
  //   let obj = {
  //     name: data.name,
  //     email: data.email,
  //     contact: data.contact,
  //     password: data.password,
  //     address: data.address,
  //     roleId: data.roleId,
  //     deptId: data.deptId,
  //     joinDate: data.joinDate,
  //     gender: data.gender,
  //     dob: data.dob,
  //   };
  //   console.log(obj);
  //   this.router.navigate(['/emp_register'], { queryParams: obj });
  // }
}
