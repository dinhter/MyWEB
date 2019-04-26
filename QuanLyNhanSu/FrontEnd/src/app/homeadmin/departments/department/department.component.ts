import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Department } from 'src/app/_model/department.model';
import { DepartmentService} from '../../../_service/department.service'
import { DepartmentEditComponent } from '../department-edit/department-edit.component';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  DepList: Department[];

  constructor(
    private ServiceDep:DepartmentService,
    private toastr: ToastrService,
    private dialog : MatDialog
  ) { }

  ngOnInit() {
    this.getAll();
  }

  getAll():void
  {
    this.ServiceDep.getAllDepartments().subscribe(pos => this.DepList=pos);
  }

  deleteDep(idDep:number)
  {
    if(confirm('Bạn có chắc muốn xóa chức vụ của người này không?') == true){
      this.ServiceDep.delete(idDep).subscribe(result => {
        console.log(result);
        this.toastr.error('Xóa thành công','Phòng ban');
        this.getAll();
      }, error => console.log('Đã có lỗi xảy ra: ', error));
      
    }
  }

  DepEditDialog(idDep)
  {
      const dialogConfig= new MatDialogConfig();
      dialogConfig.autoFocus = true;
      dialogConfig.disableClose = true;
      dialogConfig.width = "100%";
      this.dialog.open(DepartmentEditComponent);
      localStorage.removeItem("editDepId");
      localStorage.setItem("editDepId", idDep);
    
  }

}
