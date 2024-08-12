import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistrationServiceService } from '../services/registration-service.service';


import { QuillEditorComponent } from 'ngx-quill';
import { MessageService } from 'primeng/api';



@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
  providers: [MessageService],
})


export class AddTaskComponent implements OnInit {





  @ViewChild('editor', { static: true }) editor: QuillEditorComponent | any;  //RESET DATA OF QUILL EDITOR
  editorContent = '';



  Taskform !: FormGroup<any>;
  togglepattern: boolean = false;
  formSubmitted = false;
  displayTime: string = '00:00:00';
  timerInterval: any;
  totalSeconds: number = 0;
  Task_Category: any = null;
  Task_Members: any = null;
  Task_Priority: any = null;
  Project_Name: any = null;
  TaskPrioritylist: any;
  categorylist: any;
  Projectlist: any;
  EmpDetails: any;
  // tskAssign: any;
  tskmembersdarray: any = [];
  beginTimer: any = false
  endTimer: any = true
hideStart: any = false

  startTimer() {
    this.timerInterval = setInterval(() => {
      this.totalSeconds++;
      const hours = Math.floor(this.totalSeconds / 3600);
      const minutes = Math.floor((this.totalSeconds % 3600) / 60);
      const seconds = this.totalSeconds % 60;
      this.displayTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, 1000);
    this.beginTimer = true
    this.endTimer = false
    
    // this.hideStart =  !this.hideStart
  }

  stopTimer() {
    clearInterval(this.timerInterval);

    this.beginTimer = !this.beginTimer
    this.endTimer = !this.endTimer
  }

  // for quill editor
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


  constructor(private Regservice: RegistrationServiceService,
    private messageService: MessageService,
  ) { }

  taskPriority() {   //for rendering data

    let TskPriorityform = {
      priorityId: this.Taskform.value.priorityId,
      categoryId: this.Taskform.value.categoryId,
      proId: this.Taskform.value.proId,
      userId:this.tskmembersdarray,
      // orgId:this.Taskform.value.orgId,

    }

    this.Regservice.Taskprioritydata(TskPriorityform).subscribe((res: any) => {
      this.TaskPrioritylist = res.data;
    })

    this.Regservice.Taskcategorydata(TskPriorityform).subscribe((res: any) => {
      this.categorylist = res.data;
    })

    this.Regservice.ProjectNamedata(TskPriorityform).subscribe((res: any) => {
      this.Projectlist = res.data;
    })

    this.Regservice.TaskMembersdata(TskPriorityform).subscribe((res: any) => {
      this.EmpDetails = res.data;

      
    })


    // this.Regservice.TaskMemberslist(TskPriorityform).subscribe((res: any) => {
    //   this.tskAssign = res.data;
    // })

  }

  logChange($event: any) {
    console.log($event);
  }

  ngOnInit(): void {
    this.Taskform = new FormGroup({
      taskName: new FormControl('', [Validators.required]),
      proId: new FormControl(''),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),    
      userId: new FormControl(''),
      categoryId: new FormControl(''),
      priorityId: new FormControl(''),
      taskDesc: new FormControl(''),
    });
    // this.Taskform.reset();

  }

  Seetoggle() {
    this.togglepattern = !this.togglepattern;
  }

  saveTaskFormData() {


    let task_Info = {
      taskName: this.Taskform.value.taskName,
      proId: this.Taskform.value.proId,
      startDate: this.Taskform.value.startDate,
      endDate: this.Taskform.value.endDate,
      userId: this.Taskform.value.userId,
      categoryId: this.Taskform.value.categoryId,
      priorityId: this.Task_Priority,
      // userId: "['8']",
      taskDesc: this.Taskform.value.taskDesc,
    }

    console.log(task_Info);

    if (this.Taskform.valid) {
      this.Regservice.taskformData(task_Info).subscribe((res: any) => {
        if (res.success === 1) {
          this.messageService.add({
            severity: 'success',
            detail: 'Task Created Successfully',
          });
        }
        console.log(res);
      });
    }
    else {
      this.Taskform.markAllAsTouched();
      this.messageService.add({
        severity: 'error',
        detail: 'given data is invalid',
      });
    }
  }

  ResetTaskData() {





    this.editor.quillEditor.setContents([]);  //reset data of quill editor

    this.Taskform.reset();

  }
}



