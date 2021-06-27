import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Employee } from "src/app/domain-models/Employee";
import { EmployeesDialog } from "./employees-dialog";
import { EmployeesDialogData } from "./employees-dialog-data";

fdescribe('EmployeesDialog', () => {
  let component: EmployeesDialog;
  let dialogData: EmployeesDialogData;

  beforeEach(() => {

    dialogData = new EmployeesDialogData();

    component = new EmployeesDialog(dialogData);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('changeEmployeeState when employee checked should add employee to markedEmployees collection', () => {
    let employee = new Employee('testId1', 'Test', 'Employee', 2);
    let checkedStatus = true;
    let collectionInitialLength = component.markedEmployees.length;

    component.changeEmployeeState(checkedStatus, employee);

    expect(component.markedEmployees.length - collectionInitialLength).toBe(1);
  });

  it('changeEmployeeState when employee unchecked should add employee to markedEmployees collection', () => {
    let employee = new Employee('testId1', 'Test', 'Employee', 2);
    let checkedStatus = false;
    let collectionInitialLength = component.markedEmployees.length;

    component.changeEmployeeState(checkedStatus, employee);

    expect(collectionInitialLength - component.markedEmployees.length).toBe(1);
  });
});
