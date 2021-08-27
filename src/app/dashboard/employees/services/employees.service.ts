import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/domain-models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private httpClient: HttpClient) { }

  public create(team: Employee): Observable<Employee> {

    return this.httpClient.post<Employee>('https://localhost:5001/team', team);
  }
}
