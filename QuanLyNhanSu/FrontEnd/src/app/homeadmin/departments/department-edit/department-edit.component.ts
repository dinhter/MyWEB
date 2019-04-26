import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Department } from 'src/app/_model/department.model';
import { DepartmentService } from 'src/app/_service/department.service';

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.css']
})
export class DepartmentEditComponent implements OnInit {

  editForm: FormGroup;
  depId = localStorage.getItem("editDepId");
  department:any;

  constructor(
    private formBuilder: FormBuilder,
    private DepService: DepartmentService,
    private toastr : ToastrService
  ) { }

  ngOnInit() {

    if( !this.depId) {
      alert("Invalid action.")
      return;
  }
  this.editForm = this.formBuilder.group({
    idDep: ['',Validators.required],
    nameDep: ['',Validators.required],
  });

  let newId = localStorage.getItem("editDepId");
  this.depId = newId;
  this.DepService.getDepartmentByID(+this.depId)   // (+) converts string 'empId' to a number
    .subscribe( data =>{
        this.editForm.setValue({idDep: data.idDep, nameDep: data.nameDep})
      });
  }
  onSubmit() {
    this.DepService.update(+this.depId,this.editForm.value)
        .pipe(first()) //Emit the first value or first to pass provided expression.
        .subscribe(() => {
            console.log(this.editForm.value)
            this.toastr.info('Update thành công','Chức vụ');
          },
          error => {
            console.log(this.editForm.value)
            console.log(error)
            this.toastr.error(`Xảy ra lỗi, vui lòng kiểm tra lại: ${error}`);
          });
  }
  }


