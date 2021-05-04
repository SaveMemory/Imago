import { Employee } from "./Employee";

export class Boss extends Employee {

  public subordinates: Array<Employee>;

  constructor(id: string, name: string, surname: string, boss?: Boss) {
    super(id, name, surname, 0, boss);
    this.subordinates = new Array<Employee>();
  }

}
