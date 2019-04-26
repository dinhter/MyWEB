import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Employee } from 'src/app/_model/employee.model';
import { EmployeeService } from 'src/app/_service/employee.service';
import { EmployeeEditComponent } from '../employee-edit/employee-edit.component';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  EmpList:Employee[];

  constructor(
    private ServiceEmp:EmployeeService,
    private toastr: ToastrService,
    private dialog : MatDialog
  ) { }

  ngOnInit() {
    this.getAll();
  }

  getAll():void
  {
    this.ServiceEmp.getAllEmployees().subscribe(pos => this.EmpList=pos);
  }

  deleteEmp(idEmp:number)
  {
    if(confirm('Bạn có chắc muốn xóa chức vụ của người này không?') == true){
      this.ServiceEmp.delete(idEmp).subscribe(result => {
        console.log(result);
        this.toastr.error('Xóa thành công','Chức vụ');
        this.getAll();
      }, error => console.log('Đã có lỗi xảy ra: ', error));
      
    }
  }

  EmpEditDialog(idEmp)
  {
      const dialogConfig= new MatDialogConfig();
      dialogConfig.autoFocus = true;
      dialogConfig.disableClose = true;
      dialogConfig.width = "1500px";
      this.dialog.open(EmployeeEditComponent);
      localStorage.removeItem("editEmpId");
      localStorage.setItem("editEmpId", idEmp);
    
  }

}
