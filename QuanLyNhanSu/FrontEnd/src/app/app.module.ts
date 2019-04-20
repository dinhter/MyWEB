import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule} from '@angular/material/dialog';
import { MatInputModule} from '@angular/material';
import { MatButtonModule, MatCheckboxModule} from '@angular/material';
import { FormsModule} from '@angular/forms';
import { HttpClientModule} from "@angular/common/http"
import { AppComponent } from './app.component';
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
import { EmployeeService} from './shared/employee.service'
import { DepartmentService} from './shared/department.service'
import { PositionService} from './shared/position.service';
import { EmployeeInforComponent } from './homeadmin/employee/employee-infor/employee-infor.component';
import { AssignmentComponent } from './homeadmin/employee/assignment/assignment.component';
import { EmployeeComponent } from './homeadmin/employee/employee.component'

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
     component: HomeadminComponent
  },

  {
    path: 'homeuser',
    component: HomeuserComponent
 },

];
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
    EmployeeInforComponent,
    AssignmentComponent,
    EmployeeComponent,

  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule
  ],
  entryComponents:[AssignmentComponent],
  providers: [EmployeeService,DepartmentService,PositionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
