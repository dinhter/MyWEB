import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {EmployeeService} from '../../../shared/employee.service'

@Component({
  selector: 'app-employee-manage',
  templateUrl: './employee-manage.component.html',
  styleUrls: ['./employee-manage.component.css'],

})
export class EmployeeManageComponent implements OnInit {

  constructor(private employeeService :EmployeeService) { }

  
  ngOnInit() {
    this.resetForm();
  }



  resetForm(form? :NgForm){
    if (form != null)
    form.reset();
    this.employeeService.selectedEmployee = {
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
    }
  }

  // onSubmit(form: NgForm) {
  //   if (form.value.EmployeeID == null)
  //     this.insertRecord(form);
  //   else
  //     this.updateRecord(form);
  // }

  // insertRecord(form: NgForm) {
  //   this.employeeService.postEmployee(form.value).subscribe(res => {
  //     // this.toastr.success('Inserted successfully', 'EMP. Register');
  //     this.resetForm(form);
  //     // this.service.refreshList();
  //   });
  // }

  // updateRecord(form: NgForm) {
  //   this.employeeService.putEmployee(form.value).subscribe(res => {
  //     this.toastr.info('Updated successfully', 'EMP. Register');
  //     this.resetForm(form);
  //     this.employeeService.refreshList();
  //   });
  // }
}

 
  

