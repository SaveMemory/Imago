import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/domain-models/Employee';

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

  constructor() { }

  public ngOnInit(): void {
  }
}
