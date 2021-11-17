import { Component, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Employee } from 'src/app/domain-models/Employee';
import { EmployeesService } from './services/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  public employees: Array<Employee> = [
    new Employee('testBossId', "Janusz", "Kowalski", 5),
    new Employee('testBossId', "Jan", "Kowalski", 5),
    new Employee('testBossId', "Jerzy", "Kowalski", 5),
    new Employee('testBossId', "Jacek", "Kowalski", 5)
  ];

  private userId: Guid = Guid.parse("3134d4fc-bb10-4d07-ad3c-3c7d69939d5b");

  constructor(private employeesService: EmployeesService) { }

  public ngOnInit(): void {
    this.employeesService.getAllEmployeesForUser(this.userId).subscribe((result: Array<Employee>) => this.employees = result);
  }
}
