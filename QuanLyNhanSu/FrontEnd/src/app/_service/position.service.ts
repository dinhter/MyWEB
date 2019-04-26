import { Injectable } from '@angular/core';
import { Position} from 'src/app/_model/position.model'
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { HttpClient, HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  DataPos: Position;
  apiURl : string ='http://localhost:50240/api/Positions/';

  constructor(private http:HttpClient) { }

  public getAllPositions(): Observable<Position[]>
  {
    return this.http.get<Position[]>(this.apiURl).pipe(map((data:Position[]) =>{
      return data;
      }))
  }

  public getPositionByID(id: number): Observable<Position>
  {
      return this.http.get<Position>(this.apiURl+id);
  }

  public add(DataPos:Position ) : Observable<Position>
  {
      return this.http.post<Position>(this.apiURl,DataPos);
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
