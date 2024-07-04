import { Component, OnInit } from '@angular/core';
import { FormGroup, MinLengthValidator } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})

export class RegistrationFormComponent implements OnInit {

  form!:FormGroup
  f: any;
  submitted!: false;
Username: any;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form  = new FormGroup({
      username: new FormControl('',[Validators.required,Validators.minLength(7)]),
      email: new FormControl('',[Validators.required]),
      mobile_no: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required,Validators.minLength(6)]),
      confirm_pass: new FormControl('',[Validators.required]),
      dept_id: new FormControl('',[Validators.required]),
     });
  }


}
