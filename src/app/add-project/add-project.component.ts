import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserServicesService } from '../services/user-services.service';

import { QuillEditorComponent } from 'ngx-quill';

// declare const Quill: any;


@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

 @ViewChild('editor',{static:true}) editor : QuillEditorComponent;
 editorContent:string='';

  onlyActive: boolean = false;
  projectDetails!: FormGroup;
  isShown: boolean = false;
  toedit = true;
  hoveredIndex: any;
  formSubmitted = false;
  modalDetails!: FormGroup;
  selectedCity: string | undefined;
  groupedCities: any;
  deptList:any ;
  department:any=null;
  selectedclient:any=null;
  proMem:any;
  
  constructor(private userService: UserServicesService) {
    // $(function (): any {

    //   $(document).click(function () {
    //     $('.dropdown-menu2.show').removeClass('show');
    //   });

    //   $('body').on('click', '.apto-trigger-dropdown', function (e) {

    //     e.stopPropagation();

    //     $(this).closest('.apto-dropdown-wrapper').find('.dropdown-menu2').toggleClass('show');
    //   });


    //   $('body').on('click', '.dropdown-item', function (e) {

    //     e.stopPropagation();

    //     let $selectedValue = $(this).val();
    //     let $icon = $(this).find('svg');
    //     let $btn = $(this).closest('.apto-dropdown-wrapper').find('.apto-trigger-dropdown');

    //     $(this).closest('.apto-dropdown-wrapper').find('.dropdown-menu2').removeClass('show').attr('data-selected', $selectedValue);

    //     $btn.find('svg').remove();
    //     $btn.prepend($icon[0].outerHTML);

    //   });

    // });
    // this.groupedCities= [
    //   {
    //     label: 'In Progress',
    //     value: 'de',
    //     color: 'red',
    //     items: [
    //       { label: 'In Progress', value: 'In Progress'},
    //       { label: 'Frankfurt', value: 'Frankfurt' },
    //       { label: 'Hamburg', value: 'Hamburg' },
    //       { label: 'Munich', value: 'Munich' }
    //   ]
  
    //   },
    //   {
    //     label: 'Not Started',
    //     value: 'de',
    //     color: 'blue',
    //   },
    //   {
    //     label: 'On Hold',
    //     value: 'de',
    //     color: 'yellow',
    //   },
    //   {
    //     label: 'Canceled',
    //     value: 'de',
    //     color: 'black',
    //   },
    //   {
    //     label: 'Completed',
    //     value: 'de',
    //     color: 'gray',
    //   },
    //   {
    //     label: 'Overdue',
    //     value: 'de',
    //     color: 'brown',
    //   },
    //   {
    //     label: 'Sent for Review',
    //     value: 'de',
    //     color: 'green',
    //   }
    // ]
  }

  // deptId= [
  //   { name: 'Digital Marketing', value: 1 },
  //   { name: 'Sales', value: 2 },
  //   { name: 'IT', value: 3 },
  //   { name: 'Marketing', value: 4 },
  //   { name: 'Maintenance', value: 5 },
  //   { name: 'Finance', value: 6 },
  //   { name: 'Human Resources', value: 7 },
  //   { name: 'Research & Development', value: 8 },
  //   { name: 'Accounts', value: 9 },
  //   { name: 'Admin', value: 10 },
  // ];

  projectMembers = [
    { value: '1', name: "Nikita Kamnani" },
    { value: "2", name: "Rahi Adokar" },
    { value: "3", name: "Tejal Gohatre" },
    { value: '4', name: "Prince Palewar" },

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

  // logChange($event: any) {
  //   console.log(this.projectDetails.value);
  // }


  ngOnInit(): void {
    this.projectDetails = new FormGroup({
      proName: new FormControl('', [Validators.required]),
      startDate: new FormControl('', [Validators.required]),
      deadLine: new FormControl('', [Validators.required]),
      deptId: new FormControl('', [Validators.required]),
      projectMembers: new FormControl('', [Validators.required]),
      proLead : new FormControl('',[Validators.required]),
      proDesc:new FormControl('',),
      client:new FormControl('',)
    });

  }

  toggleShow() {
    this.isShown = !this.isShown;
    this.projectDetails.value.deadLine.invalid;
  }

  projectCred() {       //fields that view on console 
  
    let deptForm ={
      deptId: this.projectDetails.value.deptId,
    }

    this.userService.deptData(deptForm).subscribe((res:any) => {
      this.deptList=res.data;
      console.log(this.deptList);
    })
    
  }

  onFormSubmit() {
    // console.log(this.projectDetails.valid);

    
    if (this.projectDetails.valid) {
      this.formSubmitted = true;
      let projectForm = {
        proName: this.projectDetails.value.proName,
        startDate: this.projectDetails.value.startDate,
        deadLine: this.projectDetails.value.deadLine,
        deptId: this.department,                                        // department is the name of ngModel
        projectMembers: this.projectDetails.value.projectMembers,
        proLead:this.projectDetails.value.proLead,
        proDesc : this.projectDetails.value.proDesc,
        client : this.projectDetails.value.client
      }
      // console.log(projectForm)
      
      this.userService.projectData(projectForm).subscribe(res => {
        console.log(res);
      })

      // this.projectDetails.reset();
      
    } 
    
    else {
      this.projectDetails.markAllAsTouched();
    }

  }

  resetData() {
    this.editor.quillEditor.setContents([]);
    this.selectedclient = null;
    this.projectDetails.reset();
  }


};


