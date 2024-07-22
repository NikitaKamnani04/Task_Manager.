import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';



@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {




  constructor() { }

  name = "Angular";
  form = new FormGroup({
  
    source_switch_id: new FormControl(),
   
  });
  projectMembers = [
    { id: 1, name: "Nikita Kamnani" },
    { id: 2, name: "Rahi Adokar" },
    { id: 3, name: "Tejal Gohatre" },
    { id: 4, name: "Prince Palewar" },

  ];
  source = this.projectMembers;


  ngOnInit(): void {
    
  }

}
