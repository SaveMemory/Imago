import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Employee } from 'src/app/domain-models/Employee';
import { TeamsService } from '../services/teams.service';
import { CreateTeamComponent } from './create-team.component';

describe('CreateTeamComponent', () => {
  let component: CreateTeamComponent;
  let fixture: ComponentFixture<CreateTeamComponent>;
  let employeeDialogSpy: any;
  let matDialogRefSpy: any;
  let routerSpy: Router;
  let teamsServiceSpy: any;

  beforeEach(() => {

    employeeDialogSpy = jasmine.createSpyObj('EmployeeDialog', ['open']);
    matDialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['afterClosed']);
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    teamsServiceSpy = jasmine.createSpyObj('TeamsService', ['create']);

    TestBed.configureTestingModule({
      declarations: [CreateTeamComponent],
      providers: [
        { provide: MatDialog, useValue: employeeDialogSpy },
        { provide: Router, useValue: routerSpy},
        { provide: TeamsService, useValue: teamsServiceSpy}
      ]
    });

    fixture = TestBed.createComponent(CreateTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('when openEmployeesDialogCalled should call MatDialog open function with correct argument', () => {
    matDialogRefSpy.afterClosed.and.returnValue(of(
    [
      new Employee('testId1', 'Mock', 'Employee', 4),
      new Employee('testId1', 'Mock', 'Employee', 4),
      new Employee('testId1', 'Mock', 'Employee', 4)
    ]));

    employeeDialogSpy.open.and.returnValue(matDialogRefSpy);

    component.openEmployeesDialog();

    expect(employeeDialogSpy.open).toHaveBeenCalled();
    expect(matDialogRefSpy.afterClosed).toHaveBeenCalled();
  });

  it('when createTeam should call team service create method', () => {

    teamsServiceSpy.create.and.returnValue(of(Observable));

    component.createTeam();

    expect(teamsServiceSpy.create).toHaveBeenCalled();
  });
});
