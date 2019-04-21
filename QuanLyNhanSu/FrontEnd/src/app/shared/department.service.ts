import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {Department} from 'src/app/shared/department.model'


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  DepData: Department[];
  constructor(private http:HttpClient) { }
  getDepartmentList(){
    return this.http.get(environment.apiURl+'/Departments').toPromise();  
  }
 
}
