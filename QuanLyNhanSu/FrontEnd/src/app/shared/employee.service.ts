import { Injectable } from '@angular/core';
import { Employee} from './employee.model';
import { Assignment } from './assignment.model';

@Injectable({
  providedIn: 'root'
})
  export class EmployeeService {
  DataEmp : Employee;
  AssignEmp : Assignment[];
  
  constructor() { }
}
