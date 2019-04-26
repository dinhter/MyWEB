import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogConfig } from '@angular/material';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AssignmentService } from 'src/app/_service/assignment.service';
import { Assignment } from 'src/app/_model/assignment.model';
import { EmployeeService } from 'src/app/_service/employee.service';
import { Employee } from 'src/app/_model/employee.model';
import { DepartmentService } from 'src/app/_service/department.service';
import { Department } from 'src/app/_model/department.model';
import { PositionService } from 'src/app/_service/position.service';
import { Position} from 'src/app/_model/position.model';
import { AssignmentComponent } from './assignment/assignment.component';



@Component({
  selector: 'app-assignment-employee',
  templateUrl: './assignment-employee.component.html',
  styleUrls: ['./assignment-employee.component.css']
})
export class AssignmentEmployeeComponent implements OnInit {

    form: FormGroup;
    AssignData: Assignment;
    EmpList: Employee[];
    DepList: Department[];
    PosList: Position[];
    submited = false;


  constructor(
    private formBuilder : FormBuilder,
    private ServiceEmp:EmployeeService,
    private ServiceAssign:AssignmentService,
    private toastr : ToastrService,
    private ServiceDep:DepartmentService,
    private ServicePos:PositionService,
    private dialog : MatDialog
    ) { }

  ngOnInit() {
    this.getAll();
    this.form = this.formBuilder.group
    (
      {
          idEmp: ['',Validators.required],
          idPos: ['',Validators.required],
          idDep: ['',Validators.required]
      }
    )
  }

  getAll():void
  {
     this.ServiceEmp.getAllEmployees().subscribe(res =>this.EmpList = res as Employee[]);
     this.ServiceDep.getAllDepartments().subscribe(res =>this.DepList = res as Department[]);
     this.ServicePos.getAllPositions().subscribe(res =>this.PosList = res as Position[]);
  }

  save(){
    this.ServiceAssign.add(this.form.value).subscribe(()=>{
      this.form.reset();
      this.toastr.success('Thêm thành công','Phân công');
    },
      error =>
      {
        console.log(this.form.value);
        this.toastr.error(`Xảy ra lỗi, vui lòng kiểm tra lại: ${error}`);
      })
  }

  SubmitNewAssign()
  {
    this.submited=true;
    this.save();
  }

  ShowAssignInfo()
  {
    const dialogConfig= new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "100%";
    this.dialog.open(AssignmentComponent);
  }




  
}
