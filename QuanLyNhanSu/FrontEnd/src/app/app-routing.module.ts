import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeManageComponent } from './homeadmin/employee/employee-manage/employee-manage.component';
import { EmployeeComponent } from './homeadmin/employee/employee.component';

const routes: Routes = [
  {path:'',redirectTo:'employee-manage',pathMatch:'full'},
  {path: 'employee', component:EmployeeComponent},
  {path: 'employee-manage',children:[
    {path: '', component:EmployeeManageComponent},
    {path: 'edit/:id', component:EmployeeManageComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
