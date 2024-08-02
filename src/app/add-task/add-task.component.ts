import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistrationServiceService } from '../services/registration-service.service';
import { QuillEditorComponent } from 'ngx-quill';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})


export class AddTaskComponent implements OnInit {

  @ViewChild('editor',{static:true}) editor : QuillEditorComponent| any ;
 editorContent='';

  

  Taskform !: FormGroup<any>;
  togglepattern: boolean = false;
  formSubmitted=false;
  displayTime: string = '00:00:00';
  timerInterval: any;
  totalSeconds: number = 0;
  Project_Name:any;
  Task_Category:any=null;
  Task_Priority:any=null;
  // names:any;
  TaskPrioritylist: any;
  categorylist:any;
  TaskCategory:any;
 

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


  ProjectName_items = ['Angular', 'Flutter','Python','Nodejs'];
  // Category_items=['Frontend Developer', 'Backend Developer','Manual-Testing','Automation Testing'];
  
  
  constructor(private Regservice: RegistrationServiceService) {}

  taskPriority(){
    
    let TskPriorityform={
      priorityId:this.Taskform.value.priorityId,
      categoryId:this.Taskform.value.categoryId,
    }
    
    this.Regservice.Taskprioritydata(TskPriorityform).subscribe((res:any)=>{
      this.TaskPrioritylist=res.data;
      console.log(this.TaskPrioritylist);
    })

    this.Regservice.Taskcategorydata(TskPriorityform).subscribe((res:any)=>{
      this.categorylist=res.data;
      console.log(this.categorylist);
    })
    
  }


memberId = [
    { value: 1, name: "Rahi Adokar" },
    { value: 2, name: "Sakshi Agrawal" },
    { value: 3, name: "Nikita Kamnani" },
    { value: 4, name: "Tejal Gohatare" },
    { value: 5, name: "Prince Palewar" }
  ];

  source = this. memberId;

  logChange($event: any) {
    console.log($event);
  }

  ngOnInit(): void {
    this.Taskform = new FormGroup({
      taskName: new FormControl('', [Validators.required]),
      proId: new FormControl(''),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
      memberId: new FormControl(''),
      categoryId: new FormControl(''),
      priorityId: new FormControl(''),
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
      memberId: this.Taskform.value.memberId,
      categoryId: this.Taskform.value.categoryId,
      priorityId: this.Task_Priority,
    }

     console.log(task_Info);
    if(this.Taskform.valid){
    this.Regservice.taskformData(task_Info).subscribe((res:any) => {
      console.log(res);
    })
  }
  else {
    this.Taskform.markAllAsTouched();
  }
}

  // OnSubmitform(){
  //   if (this.Taskform.valid) {
	// 		this.formSubmitted=true;
	// 	} else {
	// 		this.Taskform.markAllAsTouched();
	// 	}
  // }
   
  ResetTaskData() {
    this.editor.quillEditor.setContents([]);


    this.Taskform.reset();
    
  }
}

// if (this.Taskform.valid) {
//   this.Regservice.getEmployeeData(emp_data).subscribe((res: any) => {
//     console.log(res);
//   })
// }
// else {
//   this.regform.markAllAsTouched();
// }
// }