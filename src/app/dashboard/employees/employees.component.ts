import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/domain-models/Employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  columns: string[] = [
    'forename', 'surname', 'workforce'
  ]

  public employees: Array<Employee> = [
    new Employee('testBossId', "Janusz", "Kowalski", 0),
    new Employee('testBossId', "Jan", "Kowalski", 0),
    new Employee('testBossId', "Jerzy", "Kowalski", 0),
    new Employee('testBossId', "Jacek", "Kowalski", 0)
  ];

  constructor() { }

  public ngOnInit(): void {
  }
}
