import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/domain-models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private httpClient: HttpClient) { }

  public getAllEmployeesForUser(id: Guid): Observable<Array<Employee>> {
    return this.httpClient.get<Array<Employee>>(`https://localhost:5001/api/employees/${id}`);
  }
}
