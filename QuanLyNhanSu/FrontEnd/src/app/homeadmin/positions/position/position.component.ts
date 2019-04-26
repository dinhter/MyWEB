import { Component, OnInit } from '@angular/core';
import { PositionService } from 'src/app/_service/position.service';
import { Position } from 'src/app/_model/position.model';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { PositionEditComponent } from '../position-edit/position-edit.component';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {

  PosList: Position[];
 
  constructor( 
    private ServicePos:PositionService,
    private toastr: ToastrService,
    private dialog : MatDialog
    ) { }

  ngOnInit() {
    this.getAll();
  }

  getAll():void
  {
    this.ServicePos.getAllPositions().subscribe(pos => this.PosList=pos);
  }

  deletePos(idPos:number)
  {
    if(confirm('Bạn có chắc muốn xóa chức vụ của người này không?') == true){
      this.ServicePos.delete(idPos).subscribe(result => {
        console.log(result);
        this.toastr.error('Xóa thành công','Chức vụ');
        this.getAll();
      }, error => console.log('Đã có lỗi xảy ra: ', error));
      
    }
  }

  PosEditDialog(idPos)
  {
      const dialogConfig= new MatDialogConfig();
      dialogConfig.autoFocus = true;
      dialogConfig.disableClose = true;
      dialogConfig.width = "100%";
      this.dialog.open(PositionEditComponent);
      localStorage.removeItem("editPosId");
      localStorage.setItem("editPosId", idPos);
    
  }

}

