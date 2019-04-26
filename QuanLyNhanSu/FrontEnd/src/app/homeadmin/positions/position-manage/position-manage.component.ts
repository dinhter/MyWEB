import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { PositionService } from 'src/app/_service/position.service';
import { Position } from 'src/app/_model/position.model';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { PositionComponent } from '../position/position.component';


@Component({
  selector: 'app-position-manage',
  templateUrl: './position-manage.component.html',
  styleUrls: ['./position-manage.component.css']
})
export class PositionManageComponent implements OnInit {
  form: FormGroup;
  PosList: Position[];
  DataPos: Position;
  submited = false;

  constructor(
    private formBuilder : FormBuilder,
    private ServicePos : PositionService,
    private toastr : ToastrService,
    private dialog : MatDialog
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group
    (
      {
          namePos: ['',Validators.required]
      }
    )
  }

  save(){
    this.ServicePos.add(this.form.value).subscribe(()=>{
      console.log(this.form.value);
      this.form.reset();
      this.toastr.success('Thêm thành công','Chức vụ');
    },
      error =>
      {
        console.log(this.form.value);
        this.toastr.error(`Xảy ra lỗi, vui lòng kiểm tra lại: ${error}`);
      })
  }


  onSubmit()
  {
    this.submited=true;
    this.save();
    
  }

  getAll():void
  {
    this.ServicePos.getAllPositions().subscribe(pos => this.PosList=pos);
  }

  ShowPosInfo()
  {
      const dialogConfig= new MatDialogConfig();
      dialogConfig.autoFocus = true;
      dialogConfig.disableClose = true;
      dialogConfig.width = "100%";
      this.dialog.open(PositionComponent);
      
  }



}
