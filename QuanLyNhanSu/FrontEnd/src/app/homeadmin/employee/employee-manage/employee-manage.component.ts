import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {EmployeeService} from '../../../shared/employee.service'
import { MatDialog,MatDialogConfig } from '@angular/material';
import { AssignmentComponent } from '../assignment/assignment.component';

@Component({
  selector: 'app-employee-manage',
  templateUrl: './employee-manage.component.html',
  styleUrls: ['./employee-manage.component.css'],

})
export class EmployeeManageComponent implements OnInit {

  constructor(private ServiceEmp :EmployeeService,
    private dialog : MatDialog) { }

  
  ngOnInit() {
    this.resetForm();
  }



  resetForm(form? :NgForm){
    if (form = null)
    form.reset();
    this.ServiceEmp.DataEmp = {
      idEmp :null,
      nameEmp :'',
      sex :'',
      birth :'',
      address :'',
      phone :'',
      mail:'',
      idCard :null,
      salary :null,
      password :'',
      isAdmin :true
    };

    this.ServiceEmp.AssignEmp=[];
  }

  AddOrEditAsignment(assignmentIndex,idAssign){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose  = true;
    dialogConfig.width = "50%";
    dialogConfig.data = {assignmentIndex,idAssign};
    this.dialog.open(AssignmentComponent,dialogConfig );
  }

  
}

 
  

