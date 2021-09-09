import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/domain-models/Employee';

@Component({
  selector: 'app-hire-employees',
  templateUrl: './hire-employees.component.html',
  styleUrls: ['./hire-employees.component.scss']
})
export class HireEmployeesComponent implements OnInit {

  public candidates: Array<Employee> = [
    new Employee('testBossId', "Janusz", "Kowalski", 5),
    new Employee('testBossId', "Jan", "Kowalski", 5),
    new Employee('testBossId', "Jerzy", "Kowalski", 5),
    new Employee('testBossId', "Jacek", "Kowalski", 5)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
