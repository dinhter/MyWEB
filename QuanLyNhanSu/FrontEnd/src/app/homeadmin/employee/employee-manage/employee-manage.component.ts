import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../../_service/employee.service'
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Employee } from 'src/app/_model/employee.model';
import { EmployeesComponent } from '../employees/employees.component';

@Component({
  selector: 'app-employee-manage',
  templateUrl: './employee-manage.component.html',
  styleUrls: ['./employee-manage.component.css'],

})
export class EmployeeManageComponent implements OnInit {

  form: FormGroup;
  EmpList: Employee[];
  DataEmp: Employee;
  submited = false;

  constructor(
    private ServiceEmp :EmployeeService,
    private formBuilder : FormBuilder,
    private toastr : ToastrService,
    private dialog : MatDialog) { }
 
  
  ngOnInit() {
    this.form = this.formBuilder.group
    (
      {
          nameEmp: ['',Validators.required],
          sex: ['',Validators.required],
          birth: ['',Validators.required],
          address: ['',Validators.required],
          phone: ['',Validators.required],
          mail: ['',Validators.required],
          idCard: ['',Validators.required],
          salary: ['',Validators.required],
          password: ['',Validators.required],
          isAdmin: ['',Validators.required]
        }
    )
  }
  save(){
    this.ServiceEmp.add(this.form.value).subscribe(()=>{
      console.log(this.form.value);
      this.form.reset();
      this.toastr.success('Thêm thành công','Chức vụ');
    },
      error =>
      {
        console.log(this.form.value);
        this.toastr.error(`Xảy ra lỗi, vui lòng kiểm tra lại: ${error}`);
      })
  }


  onSubmit()
  {
    this.submited=true;
    this.save();
    
  }

  getAll():void
  {
    this.ServiceEmp.getAllEmployees().subscribe(pos => this.EmpList=pos);
  }

  ShowEmpInfo()
  {
      const dialogConfig= new MatDialogConfig();
      dialogConfig.autoFocus = true;
      dialogConfig.disableClose = true;
      dialogConfig.width = "1000px";
      this.dialog.open(EmployeesComponent);
      
  }
  
}

 
  

