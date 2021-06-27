import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Boss } from 'src/app/domain-models/Boss';
import { Employee } from 'src/app/domain-models/Employee';
import { EmployeesDialog } from './employees-dialog/employees-dialog';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.scss']
})
export class CreateTeamComponent implements OnInit {

  public createTeamForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    size: new FormControl(0),
    boss: new FormControl(null)
  });

  public availableBosses: Array<Boss>;

  public availableEmployees: Array<Employee>;

  public chosenEmployees: Array<Employee> = [];

  public constructor(public dialog: MatDialog) {
    this.availableBosses =
    [
      new Boss('testId1', 'Arkadiusz', 'Kowalski'),
      new Boss('testId2', 'Maciej', 'Nowak'),
      new Boss('testId3', 'Mariusz', 'Andrzejewski')
    ];

    this.availableEmployees = [
      new Employee('testId1', 'Mock', 'Employee', 4),
      new Employee('testId1', 'Mock', 'Employee', 4),
      new Employee('testId1', 'Mock', 'Employee', 4),
      new Employee('testId1', 'Mock', 'Employee', 4),
      new Employee('testId1', 'Mock', 'Employee', 4)
    ];
  }

  public ngOnInit(): void {
  }

  public openEmployeesDialog(): void {
    let dialogReference = this.dialog.open(EmployeesDialog, {
      data: {
        employees: this.availableEmployees
      }
    });

    dialogReference.afterClosed().subscribe(result => {
      this.chosenEmployees = result;
    });
  };

}
