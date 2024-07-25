import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserServicesService } from '../services/user-services.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  // @ViewChild('editor') editor;

  onlyActive: boolean = false;
  projectDetails!: FormGroup;
  isShown: boolean = false;
  toedit = true;
  hoveredIndex:any;
  formSubmitted = false;
  modalDetails!:FormGroup;

  constructor(private userService:UserServicesService) { }

  projectMembers = [
    { value:'Nikita Kamnani', name: "Nikita Kamnani" },
    { value:"Rahi Adokar", name: "Rahi Adokar" },
    { value:"Tejal Gohatre", name: "Tejal Gohatre" },
    { value:'Prince Palewar', name: "Prince Palewar"},

  ];
  source = this.projectMembers;

  modules = {
    formula: true,
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'], // toggled buttons
      ['blockquote', 'code-block'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      // [{ 'script': 'sub'}, { 'script': 'super' }], // superscript/subscript
      [{ 'indent': '-1' }, { 'indent': '+1' }], // outdent/indent
      [{ 'size': ['small', false, 'large', 'huge'] }], // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{ 'color': [] }, { 'background': [] }], // dropdown with defaults from theme
      [{ 'font': [] }],
      ['link', 'image'] // link
    ]

  };

  logChange($event: any) {
    console.log($event);
  }


  ngOnInit(): void {
    this.projectDetails = new FormGroup({
      'projectName': new FormControl('', [Validators.required]),
      'projectCategory': new FormControl('', [Validators.required]),
      'projectCategory-modal':new FormControl('', [Validators.required]),
      'startDate': new FormControl('', [Validators.required]),
      'endDate': new FormControl('', [Validators.required]),
      'department': new FormControl('', [Validators.required]),
      'projectMembers': new FormControl('', [Validators.required, Validators.minLength(1)]),
    });

    this.projectDetails.reset();

    
  }

  toggleShow() {
    this.isShown = !this.isShown;
  }

  projectCred(){
    let projectForm = {
      projectName : this.projectDetails.value.projectName,
      projectCategory : this.projectDetails.value.projectCategory,
      startDate : this.projectDetails.value.startDate,
      endDate : this.projectDetails.value.endDate,
      department : this.projectDetails.value.department,
      projectMembers : this.projectDetails.value.projectMembers
    }
    // console.log(projectForm)
    this.userService.projectData(projectForm).subscribe(res=>{
      console.log(res);
    })
  }

  onFormSubmit() {
		if (this.projectDetails.valid) {
			this.formSubmitted=true;
		} else {
			this.projectDetails.markAllAsTouched();
		}
	}

  resetData(){
    this.projectDetails.reset();
  }

  }

