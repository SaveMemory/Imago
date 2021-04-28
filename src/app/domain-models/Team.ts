import { Employee } from "./Employee";

export class Team {
  public Name: string;
  public Size: number;
  public Boss: Employee;
  public Members: Array<Employee>;


  constructor(name: string, size: number, boss: Employee) {
    this.Name = name;
    this.Size = size;
    this.Boss = boss;
    this.Members = new Array<Employee>();
  }
}
