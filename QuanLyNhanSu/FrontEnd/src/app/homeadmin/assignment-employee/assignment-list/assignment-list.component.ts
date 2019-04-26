import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Assignment } from 'src/app/_model/assignment.model';
import { AssignmentService } from 'src/app/_service/assignment.service';
import { Department } from 'src/app/_model/department.model';
import { DepartmentService } from 'src/app/_service/department.service';

@Component({
  selector: 'app-assignment-list',
  templateUrl: './assignment-list.component.html',
  styleUrls: ['./assignment-list.component.css']
})
export class AssignmentListComponent implements OnInit {

  AssignList: Assignment[];
  DepList: Department[];

  constructor(
    private ServiceAssign: AssignmentService,
    private ServiceDep: DepartmentService,
    private toastr: ToastrService,
    private dialog : MatDialog
  ) { }

  ngOnInit() {
    //this.getAll();
  }

  // getAll():void
  // {
  //   this.ServiceDep.getAllDepartments().subscribe(pos => this.DepList=pos);
  // }

  // deletePos(idPos:number)
  // {
  //   if(confirm('Bạn có chắc muốn xóa chức vụ của người này không?') == true){
  //     this.ServiceAssign.delete(idPos).subscribe(result => {
  //       console.log(result);
  //       this.toastr.error('Xóa thành công','Chức vụ');
  //       this.getAll();
  //     }, error => console.log('Đã có lỗi xảy ra: ', error));
      
  //   }
  // }

  // PosEditDialog(idPos)
  // {
  //     const dialogConfig= new MatDialogConfig();
  //     dialogConfig.autoFocus = true;
  //     dialogConfig.disableClose = true;
  //     dialogConfig.width = "100%";
  //     this.dialog.open(AssignmentListComponent);
  //     localStorage.removeItem("editPosId");
  //     localStorage.setItem("editPosId", idPos);
    
  // }

  

}
