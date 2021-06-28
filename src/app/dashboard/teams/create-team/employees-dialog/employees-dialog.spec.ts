import { MatDialogRef } from "@angular/material/dialog";
import { Employee } from "src/app/domain-models/Employee";
import { EmployeesDialog } from "./employees-dialog";
import { EmployeesDialogData } from "./employees-dialog-data";

describe('EmployeesDialog', () => {
  let component: EmployeesDialog;
  let dialogData: EmployeesDialogData;
  let matDialogRefSpy: MatDialogRef<EmployeesDialog>;

  beforeEach(() => {

    matDialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['close']);
    dialogData = new EmployeesDialogData();
    component = new EmployeesDialog(matDialogRefSpy, dialogData);

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
    let employee1 = new Employee('testId1', 'Test', 'Employee1', 2);
    let employee2 = new Employee('testId2', 'Test2', 'Employee2', 3);
    component.markedEmployees.push(employee1);
    component.markedEmployees.push(employee2);
    let checkedStatus = false;
    let collectionInitialLength = component.markedEmployees.length;

    component.changeEmployeeState(checkedStatus, employee1);

    expect(collectionInitialLength - component.markedEmployees.length).toBe(1);
  });

  it('when onCancelClick should call dialogRef close method', () => {
    component.onCancelClick();
    expect(matDialogRefSpy.close).toHaveBeenCalledTimes(1);
  });
});
