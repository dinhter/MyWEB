import { Injectable } from '@angular/core';
import { Department} from './department.model';


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  selectedDepartment : Department;
  constructor() { }
}
