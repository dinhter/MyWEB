import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA,MatDialogRef} from '@angular/material';
import { Department } from 'src/app/shared/department.model';
import { DepartmentService } from 'src/app/shared/department.service';
import { PositionService } from 'src/app/shared/position.service';
import {Position} from 'src/app/shared/position.model';
import { NgForm } from '@angular/forms';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
    DepData: Department;
    DepList: Department[];
    PosList: Position[];
    PosData: Position;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef:MatDialogRef<AssignmentComponent>,
    private DepService:DepartmentService,
    private PosService:PositionService,
    private EmpService:EmployeeService
    )
    
     { }

  ngOnInit() {
    this.DepService.getDepartmentList().then(res =>this.DepList = res as Department[]);
    this.PosService.getPostionList().then(res =>this.PosList = res as Position[]);

    this.DepData={
        idDep:0,
        idAssign:this.data.idAssign, 
        nameDep:'',
        idPos:0,
    }

    this.PosData={
        idPos:0,
        namePos:''
      }
  }

  onSubmit(form:NgForm)
  {
    this.EmpService.AssignEmp.push(form.value);
    this.dialogRef.close();
  }

}
