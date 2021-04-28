import { Employee } from "./Employee";

export class Boss extends Employee {

  public Subordinates: Array<Employee>;

  constructor(id: string, name: string, surname: string, boss: Boss) {
    super(id, name, surname, boss);
    this.Subordinates = new Array<Employee>();
  }

}
