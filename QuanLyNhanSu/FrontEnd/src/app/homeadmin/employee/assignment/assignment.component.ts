import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA,MatDialogRef} from '@angular/material';
import { Department } from 'src/app/shared/department.model';
import { DepartmentService } from 'src/app/shared/department.service';
import { PositionService } from 'src/app/shared/position.service';
import {Position} from 'src/app/shared/position.model';
import { NgForm } from '@angular/forms';
import { EmployeeService } from 'src/app/shared/employee.service';
import { AssignmentService } from 'src/app/shared/assignment.service';


@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
    DepList: Department[];
    PosList: Position[];
    isValid: boolean = true;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef:MatDialogRef<AssignmentComponent>,
    private DepService:DepartmentService,
    private PosService:PositionService,
    private ServiceAssign : AssignmentService,
    )
    
     { }

  ngOnInit() {
    this.DepService.getDepartmentList().then(res =>this.DepList = res as Department[]);
    this.PosService.getPostionList().then(res =>this.PosList = res as Position[]);

    this.ServiceAssign.DataAssign = {
      idAssign:this.data.idAssign,
      idEmp:null,
  }
    
  }

  onSubmit(form:NgForm)
  {
    this.DepService.DepData.push(form.value);
    this.PosService.PosData.push(form.value);
    this.dialogRef.close();
  }

}
