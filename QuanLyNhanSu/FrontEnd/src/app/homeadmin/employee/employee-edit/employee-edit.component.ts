import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from 'src/app/_service/employee.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  editForm: FormGroup;
  empId = localStorage.getItem("editEmpId");
  employee:any;

  constructor(
    private formBuilder: FormBuilder,
    private EmpService: EmployeeService,
    private toastr : ToastrService
  ) { }

  ngOnInit() {
    if( !this.empId) {
      alert("Invalid action.")
      return;
  }
  this.editForm = this.formBuilder.group({
    idEmp: ['',Validators.required],
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
  });

  let newId = localStorage.getItem("editEmpId");
  this.empId = newId;
  this.EmpService.getEmployeeByID(+this.empId)   // (+) converts string 'empId' to a number
    .subscribe( data =>{
        this.editForm.setValue({
          idEmp: data.idEmp, nameEmp: data.nameEmp,
          sex: data.sex, birth: data.birth,
          address: data.address, phone: data.phone,
          mail: data.mail, idCard: data.idCard,
          salary: data.salary, password: data.password,
          isAdmin: data.isAdmin})
      });
  }
  onSubmit() {
    this.EmpService.update(+this.empId,this.editForm.value)
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
