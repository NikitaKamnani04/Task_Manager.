import { Component, ElementRef, OnInit, ViewChild, ɵgetUnknownElementStrictMode } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserServicesService } from '../services/user-services.service';

import { QuillEditorComponent } from 'ngx-quill';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import { LogarithmicScale } from 'chart.js';
import { event } from 'jquery';


// declare const Quill: any;

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css'],
  providers: [MessageService],
})
export class AddProjectComponent implements OnInit {


  
// onPageChange2($event: any) {
// throw new Error('Method not implemented.');
// }


first1: number = 0;

    rows1: number = 10;

    first2: number = 0;

    rows2: number = 10;

    first3: number = 0;

    rows3: number = 10;

    totalRecords: number = 120;

    options = [
        { label: 5, value: 5 },
        { label: 10, value: 10 },
        { label: 20, value: 20 },
        { label: 120, value: 120 }
    ];

    // onPageChange1(event: PageEvent) {
    //     this.first1 = event.first;
    //     this.rows1 = event.rows;
    // }

    onPageChange2(event: PageEvent) {
        this.first2 = event.first;
        this.rows2 = event.rows;
    }

    // onPageChange3(event: PageEvent) {
    //     this.first3 = event.first;
    //     this.rows3 = event.rows;
    // }

  @ViewChild('editor', { static: true }) editor: QuillEditorComponent;
  editorContent: string = '';
  projectMembers1: any;
  onlyActive: boolean = false;
  projectDetails!: FormGroup;
  isShown: boolean = false;
  toedit = true;
  hoveredIndex: any;
  formSubmitted = false;
  modalDetails!: FormGroup;
  selectedCity: string | undefined;
  groupedCities: any;
  deptList: any;
  department: any = null;
  selectedclient: any = null;
  proMem: any;
  clientList: any;
  addClient: any;
  sources: any
  empResData: any;
  showEmpDetails: any;
  selectedMembers: any = null;
  membersName: any;
  selectMem: any;
  selectedUsers: any;
  selectedArray: any;
  selectBox: boolean = true;
  isHide: boolean;
  pageCreated: Object;
  success: Object;
  newStartDate: any;
  newEndDate: any;
  correctDate: boolean;
  prodata: any;
  startdate: any;
// rows2: any;
// options: any[];
// first2: number;


  constructor(private userService: UserServicesService, private messageService: MessageService) {
    console.log(this.startdate);
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

  deptId = [
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

  // source=this.deptId;

  // projectMembers = [
  //   { value: '1', name: "Nikita Kamnani" },
  //   { value: "2", name: "Rahi Adokar" },
  //   { value: "3", name: "Tejal Gohatre" },
  //   { value: '4', name: "Prince Palewar" },

  // ];
  // source = this.projectMembers;


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
      proName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      startDate: new FormControl('', [Validators.required],),
      deadLine: new FormControl('', [Validators.required]),
      deptId: new FormControl('', [Validators.required]),
      userId: new FormControl('', [Validators.required]),
      proLead: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      proDesc: new FormControl('',),
      clientId: new FormControl('',),
      clientName: new FormControl('', [Validators.pattern('[a-zA-Z ]*')])
    });

    // this.newStartDate= this.projectDetails.controls['startDate'].value,
    // this.newEndDate=this.projectDetails.controls['deadLine'].value

    // if(this.newStartDate <= this.newEndDate)
    // {
    //    this.projectDetails.enable;
    // }
    // else
    // {
    //   this.projectDetails.disable;
    // }
  }
  getDate(event: any) {
    
    this.newStartDate = event.srcElement.value,
    this.newEndDate=event.srcElement.value
    
    console.log(event.srcElement.value);
    if(this.newStartDate <= this.newEndDate)
    {
      
    }
  }
  toggleShow() {
    this.isShown = !this.isShown;
    this.projectDetails.removeControl('deadLine')
  }

  projectCred() {       //fields that display on console or get through api

    this.userService.clientData().subscribe((res: any) => {
      this.clientList = res.data;
    })

    this.userService.membersData().subscribe((res: any) => {
      this.showEmpDetails = res.data
    })

    
  }

  addingClient() {
    let clientAdd = {
      clientName: this.projectDetails.value.clientName
    }
    this.userService.clientAddData(clientAdd).subscribe((res: any) => {
      this.addClient = res.data
    })
  }


  onFormSubmit() {

    if (this.projectDetails.valid) {
      this.formSubmitted = true;

      let projectForm = {
        proName: this.projectDetails.value.proName,
        startDate: this.projectDetails.value.startDate,
        deadLine: this.projectDetails.value.deadLine,
        deptId: this.department,
        userId: this.selectedArray,
        proLead: this.projectDetails.value.proLead,
        proDesc: this.projectDetails.value.proDesc,
        clientId: this.selectedclient,
        clientName: this.projectDetails.value.clientName
      }

      this.userService.projectData(projectForm).subscribe(res => {
        console.log(res);

        if (res) {
          this.messageService.add({
            severity: 'success',
            detail: 'Project created Sucessfully',
          });
        }

      })
      this.projectDetails.reset();
    }

    else {
      this.projectDetails.markAllAsTouched();
      this.messageService.add({
        severity: 'error',
        detail: 'The given data was invalid',
      });
    }

  }

  resetData() {
    this.editor.quillEditor.setContents([]);
    this.selectedclient = null;
    this.projectDetails.reset();
  }


};



