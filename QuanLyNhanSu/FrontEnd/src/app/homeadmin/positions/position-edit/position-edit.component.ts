import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { PositionService } from '../../../_service/position.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-position-edit',
  templateUrl: './position-edit.component.html',
  styleUrls: ['./position-edit.component.css']
})
export class PositionEditComponent implements OnInit {

  editForm: FormGroup;
  posId = localStorage.getItem("editPosId");
  position:any;

  constructor(
    private formBuilder: FormBuilder,
    private PosService: PositionService,
    private toastr : ToastrService
  ) { }

  ngOnInit() {
  
  if( !this.posId) {
      alert("Invalid action.")
      return;
  }
  this.editForm = this.formBuilder.group({
    idPos: ['',Validators.required],
    namePos: ['',Validators.required],
  });

  let newId = localStorage.getItem("editPosId");
  this.posId = newId;
  this.PosService.getPositionByID(+this.posId)   // (+) converts string 'empId' to a number
    .subscribe( data =>{
        this.editForm.setValue({idPos: data.idPos, namePos: data.namePos})
      });
  }
  onSubmit() {
    this.PosService.update(+this.posId,this.editForm.value)
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
