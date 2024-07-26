import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistrationServiceService } from '../services/registration-service.service';
import * as $ from 'jquery'


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  Taskform !: FormGroup<any>;
  togglepattern: boolean = false;
  // SavedFormData:false;

  // for quill editor
  displayTime: string = '00:00:00';
  timerInterval: any;
  totalSeconds: number = 0;


  startTimer() {
    this.timerInterval = setInterval(() => {
      this.totalSeconds++;
      const hours = Math.floor(this.totalSeconds / 3600);
      const minutes = Math.floor((this.totalSeconds % 3600) / 60);
      const seconds = this.totalSeconds % 60;
      this.displayTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timerInterval);
  }

  modules = {
    formula: true,
    toolbar: [
      [{ header: [1, 2, false] }], ['bold', 'italic', 'underline', 'strike'], //toggle buttons
      ['formula'],
      ['link'],
      ['clean'],
      ['image', 'code-block'],
      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    ]
  };

  TaskCategory_items!: ['Automation testing'];
  constructor(private Regservice: RegistrationServiceService) {
  
  }

  Task_Members = [
    { value: 1, name: "Rahi Adokar" },
    { value: 2, name: "Sakshi Agrawal" },
    { value: 3, name: "Nikita Kamnani" },
    { value: 4, name: "Tejal Gohatare" },
    { value: 5, name: "Prince Palewar" }
  ];

  source = this.Task_Members;

  logChange($event: any) {
    console.log($event);
  }

  ngOnInit(): void {
    this.Taskform = new FormGroup({
      Task_Name: new FormControl('', [Validators.required]),
      Project_Name: new FormControl('', [Validators.required]),
      Start_Date: new FormControl('', [Validators.required]),
      End_Date: new FormControl('', [Validators.required]),
      Task_Members: new FormControl('', [Validators.required]),
      Task_category:new FormControl('', [Validators.required]),
    });
  }

  Seetoggle() {
    this.togglepattern = !this.togglepattern;
  }

  saveTaskFormData() {
    let task_Info = {
      Task_Name: this.Taskform.value.Task_Name,
      Project_Name: this.Taskform.value.Project_Name,
      Start_Date: this.Taskform.value.Start_Date,
      End_Date: this.Taskform.value.End_Date,
      Task_category: this.Taskform.value.Task_category,
      Task_Priority: this.Taskform.value.Task_Priority,
    }

    if (this.Taskform.valid) {
      this.Regservice.taskformData(task_Info).subscribe((res: any) => {
        console.log(res);

      })
    }
    else {
      this.Taskform.markAllAsTouched();
    }
  }

  ResetTaskData() {
    this.Taskform.reset();
  } 
}

