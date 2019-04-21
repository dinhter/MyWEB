import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { MatDialog,MatDialogConfig } from '@angular/material';
import { AssignmentComponent } from '../assignment/assignment.component';
import { AssignmentService } from 'src/app/shared/assignment.service';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-employee-manage',
  templateUrl: './employee-manage.component.html',
  styleUrls: ['./employee-manage.component.css'],

})
export class EmployeeManageComponent implements OnInit {

  constructor(private ServiceAssign : AssignmentService,
    //private ServiceEmp :EmployeeService,
    private dialog : MatDialog) { }

  
  ngOnInit() {
    this.resetForm();
  }



  resetForm(form? :NgForm){
    if (form = null)
    form.reset();
    this.ServiceAssign.DataAssign =
    {
      idAssign:null,
      idEmp:null,
    }
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

 
  

