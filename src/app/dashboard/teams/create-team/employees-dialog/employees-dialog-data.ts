import { Employee } from "src/app/domain-models/Employee";

export class EmployeesDialogData {
  public employees: Array<Employee>;

  public constructor() {
    this.employees = new Array<Employee>();
  }
}
