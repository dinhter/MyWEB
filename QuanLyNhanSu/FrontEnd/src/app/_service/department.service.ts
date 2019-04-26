import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { HttpClient, HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Department } from '../_model/department.model';


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  DataDep : Department;
  DepList : Department[]
  apiURl : string ='http://localhost:50240/api/Departments/';

  constructor(private http:HttpClient) { }
  public getAllDepartments(): Observable<Department[]>
  {
    return this.http.get<Department[]>(this.apiURl).pipe(map((data:Department[]) =>{
      return data;
      }))
  }

  public getDepartmentByID(id: number): Observable<Department>
  {
      return this.http.get<Department>(this.apiURl+id);
  }

  public add(DataDep:Department ) : Observable<Department>
  {
      return this.http.post<Department>(this.apiURl,DataDep);
  }

  public update(id: number, DataDep: Department): Observable<void>
  {
    return this.http.put<void>(this.apiURl+ id,DataDep);
  }

  public delete(id: number)
  {
    return this.http.delete(this.apiURl + id);
  }

}

@Injectable()
export class CustomInterceptor implements HttpInterceptor
{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.headers.has('Content-Type')) {
        req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
    }

    req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
    return next.handle(req);
  
    }
}
 
