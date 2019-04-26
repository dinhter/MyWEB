import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogConfig} from '@angular/material';
import { AssignmentListComponent } from '../assignment-list/assignment-list.component';
import { ToastrService } from 'ngx-toastr';
import { AssignmentService } from 'src/app/_service/assignment.service';
import { Assignment } from 'src/app/_model/assignment.model';



@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
    AssignList : Assignment[];
    

  constructor(
    public dialog:MatDialog,
    private ServiceAssign:AssignmentService,
    private toastr : ToastrService,

    ){ }

  ngOnInit() {
    this.getAll();
  }
  

  getAll():void
  {
     this.ServiceAssign.getAllAssignments().subscribe(res =>this.AssignList = res as Assignment[]);
  }

  deleteAssign(idAssign:number)
  {
    if(confirm('Bạn có chắc muốn xóa phân công của người này không?') == true){
      this.ServiceAssign.delete(idAssign).subscribe(result => {
        console.log(result);
        this.toastr.error('Xóa thành công','Phân công');
        this.getAll();
      }, error => console.log('Đã có lỗi xảy ra: ', error));
      
    }
  }

  AssignEditDialog(idAssign)
  {
      const dialogConfig= new MatDialogConfig();
      dialogConfig.autoFocus = true;
      dialogConfig.disableClose = true;
      dialogConfig.width = "100%";
      this.dialog.open(AssignmentListComponent);
      localStorage.removeItem("editAssignId");
      localStorage.setItem("editAssignId", idAssign);   
  }

}


  


