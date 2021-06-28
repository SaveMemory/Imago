import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Employee } from "src/app/domain-models/Employee";
import { EmployeesDialogData } from "./employees-dialog-data";

@Component({
  selector: 'employees-dialog',
  templateUrl: 'employees-dialog.html',
  styleUrls: ['./employees-dialog.scss']
})
export class EmployeesDialog {

  public markedEmployees: Array<Employee> = new Array<Employee>();

  constructor(public dialogRef: MatDialogRef<EmployeesDialog>,
    @Inject(MAT_DIALOG_DATA) public data: EmployeesDialogData) {}

  public changeEmployeeState(checkedStatus: boolean, employee: Employee): void {

    checkedStatus
    ? this.markedEmployees.push(employee)
    : this.removeEmployee(employee.id);
  }

  public onCancelClick() {
    this.dialogRef.close();
  }

  private removeEmployee(employeeId: string): void {
    this.markedEmployees.forEach(employee => {
      if(employee.id === employeeId) {
        this.markedEmployees.splice(this.markedEmployees.indexOf(employee, 1));
      }
    });
  }
}
