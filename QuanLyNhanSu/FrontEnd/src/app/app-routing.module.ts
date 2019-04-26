import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { Employee } from '../app/_model/employee.model';


const appRoutes: Routes = [
  {
     path: '',
     redirectTo:'login',
     pathMatch:'full'
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'about',
    component: AboutComponent
  },

  {
    path: 'contact',
    component: ContactComponent
  },
  
  {
    path: 'homeadmin',
    component: HomeadminComponent,
    data: { roles: [Role.Admin] } 
  },

{
    path: 'homeuser',
    component: HomeuserComponent,
    data: { roles: [Role.User] } 
 },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
