import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  Taskform !: FormGroup<any>;

  // for quill editor
  modules = {
    formula: true,
    toolbar: [
      [{ header: [1, 2, false] }],['bold', 'italic', 'underline','strike'], //toggle buttons
      ['formula'],
      ['link'],
      ['clean'],
      ['image', 'code-block'],
      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    ]
  };

  constructor() {
    this.Taskform = new FormGroup({
      Task_Name: new FormControl('', [Validators.required]),
      Project_Name: new FormControl('', [Validators.required]),
      Start_Date: new FormControl('', [Validators.required]),
      End_Date: new FormControl('', [Validators.required, Validators.minLength(6)]),

    });
  }


  logChange($event: any) {
    console.log($event);
  }
  ngOnInit(): void {

  }

}
