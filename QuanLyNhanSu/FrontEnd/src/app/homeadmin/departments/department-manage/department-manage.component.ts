import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Department } from 'src/app/_model/department.model';
import {DepartmentService} from '../../../_service/department.service'
import { DepartmentComponent } from '../department/department.component';


@Component({
  selector: 'app-department-manage',
  templateUrl: './department-manage.component.html',
  styleUrls: ['./department-manage.component.css']
})
export class DepartmentManageComponent implements OnInit {
  form: FormGroup;
  DepList: Department[];
  DataDep: Department;
  submited = false;

  constructor(
    private ServiceDep : DepartmentService,
    private formBuilder : FormBuilder,
    private toastr : ToastrService,
    private dialog : MatDialog
    ) { }

  ngOnInit() {
    this.form = this.formBuilder.group
    (
      {
          nameDep: ['',Validators.required]
      }
    )
  }

  save(){
    this.ServiceDep.add(this.form.value).subscribe(()=>{
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
    this.ServiceDep.getAllDepartments().subscribe(pos => this.DepList=pos);
  }

  ShowDepInfo()
  {
      const dialogConfig= new MatDialogConfig();
      dialogConfig.autoFocus = true;
      dialogConfig.disableClose = true;
      dialogConfig.width = "100%";
      this.dialog.open(DepartmentComponent);
      
  }

}
