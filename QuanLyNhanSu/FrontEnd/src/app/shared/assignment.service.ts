import { Injectable } from '@angular/core';
import { Assignment } from './assignment.model';
@Injectable({
  providedIn: 'root'
})
export class AssignmentService {
  DataAssign : Assignment;
  AssignEmp : Assignment[];
  constructor() { }
}
