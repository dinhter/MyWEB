import { Injectable } from '@angular/core';
import { Assignment } from '../_model/assignment.model';
import {map} from 'rxjs/operators';
import { HttpClient, HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {
  DataAssign: Assignment;
  apiURl : string ='http://localhost:50240/api/Assignments/';

  constructor(private http:HttpClient) { } 

  public getAllAssignments(): Observable<Assignment[]>
  {
    return this.http.get<Assignment[]>(this.apiURl).pipe(map((data:Assignment[]) =>{
      return data;
      }))
  }

  public getAssignmentByID(id: number): Observable<Assignment>
  {
      return this.http.get<Assignment>(this.apiURl+id);
  }

  public add(DataPos:Assignment ) : Observable<Assignment>
  {
      return this.http.post<Assignment>(this.apiURl,DataPos);
  }

  public update(id: number, DataPos: Position): Observable<void>
  {
    return this.http.put<void>(this.apiURl+ id,DataPos);
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