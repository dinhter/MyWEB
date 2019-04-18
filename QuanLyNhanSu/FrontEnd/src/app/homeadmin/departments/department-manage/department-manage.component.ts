import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {DepartmentService} from '../../../shared/department.service'


@Component({
  selector: 'app-department-manage',
  templateUrl: './department-manage.component.html',
  styleUrls: ['./department-manage.component.css']
})
export class DepartmentManageComponent implements OnInit {

  constructor(private departmentService : DepartmentService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form? :NgForm){
    if (form != null)
    form.reset();
    this.departmentService.selectedDepartment = {
      idDep: null,
      nameDep:''
    }
  }

}
