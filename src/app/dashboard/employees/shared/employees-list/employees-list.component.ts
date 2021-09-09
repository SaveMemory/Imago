import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/domain-models/Employee';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {

  @Input()
  public employees: Array<Employee> = new Array<Employee>();

  columns: string[] = [
    'forename', 'surname', 'workforce'
  ]

  constructor() { }

  ngOnInit(): void {
  }


}
