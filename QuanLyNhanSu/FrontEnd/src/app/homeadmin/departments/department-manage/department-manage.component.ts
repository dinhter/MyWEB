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
  }

}
