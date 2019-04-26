import { Injectable} from '@angular/core';
import { Employee} from '../_model/employee.model';
import { HttpClient, HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
  export class EmployeeService {
  DataEmp : Employee;
  apiURl : string ='http://localhost:50240/api/Employees/';
  constructor(private http:HttpClient) { }

  public getAllEmployees(): Observable<Employee[]>
  {
    return this.http.get<Employee[]>(this.apiURl).pipe(map((data:Employee[]) =>{
      return data;
      }))
  }

  public getEmployeeByID(id: number): Observable<Employee>
  {
      return this.http.get<Employee>(this.apiURl+id);
  }

  public add(DataEmp:Employee ) : Observable<Employee>
  {
      return this.http.post<Employee>(this.apiURl,DataEmp);
  }

  public update(id: number, DataEmp: Employee): Observable<void>
  {
    return this.http.put<void>(this.apiURl+id,DataEmp);
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
  
