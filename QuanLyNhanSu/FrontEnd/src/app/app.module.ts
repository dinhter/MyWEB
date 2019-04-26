import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule} from '@angular/material/dialog';
import { MatInputModule} from '@angular/material';
import { MatButtonModule, MatCheckboxModule} from '@angular/material';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from "@angular/common/http"
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeadminComponent } from './homeadmin/homeadmin.component';
import { HomeuserComponent } from './homeuser/homeuser.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NavTabsComponent } from './homeadmin/nav-tabs/nav-tabs.component';
import { DepartmentComponent } from './homeadmin/departments/department/department.component';
import { PositionComponent } from './homeadmin/positions/position/position.component';
import { EmployeeManageComponent } from './homeadmin/employee/employee-manage/employee-manage.component';
import { DepartmentManageComponent } from './homeadmin/departments/department-manage/department-manage.component';
import { PositionManageComponent } from './homeadmin/positions/position-manage/position-manage.component';
import { UserInforComponent } from './homeuser/user-infor/user-infor.component';
import { UserEditComponent } from './homeuser/user-edit/user-edit.component';
import { NavTabsUserComponent } from './homeuser/nav-tabs-user/nav-tabs-user.component';
import { EmployeeService} from './_service/employee.service'
import { DepartmentService} from './_service/department.service'
import { PositionService} from './_service/position.service';
import { AssignmentComponent } from './homeadmin/assignment-employee/assignment/assignment.component';
import { AssignmentEmployeeComponent } from './homeadmin/assignment-employee/assignment-employee.component';
import { InforUserComponent } from './homeadmin/infor-user/infor-user.component';
import { AssignmentListComponent } from './homeadmin/assignment-employee/assignment-list/assignment-list.component'
import { PositionEditComponent } from './homeadmin/positions/position-edit/position-edit.component';
import { DepartmentEditComponent } from './homeadmin/departments/department-edit/department-edit.component';
import { EmployeesComponent } from './homeadmin/employee/employees/employees.component';
import { EmployeeEditComponent } from './homeadmin/employee/employee-edit/employee-edit.component';
import { AssignmentService} from './_service/assignment.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    HomeadminComponent,
    HomeuserComponent,
    AboutComponent,
    ContactComponent,
    NavTabsComponent,
    DepartmentComponent,
    PositionComponent,
    EmployeeManageComponent,
    DepartmentManageComponent,
    PositionManageComponent,
    UserInforComponent,
    UserEditComponent,
    NavTabsUserComponent,
    AssignmentComponent,
    AssignmentEmployeeComponent,
    InforUserComponent,
    AssignmentListComponent,
    PositionEditComponent,
    DepartmentEditComponent,
    EmployeesComponent,
    EmployeeEditComponent,
   

  ],
  imports: [
    // RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  entryComponents:[PositionComponent,DepartmentComponent,DepartmentEditComponent,EmployeesComponent,EmployeeEditComponent,AssignmentComponent,AssignmentListComponent],
  providers: [EmployeeService,DepartmentService,PositionService,AssignmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
