import { Boss } from "./Boss";

export class Employee {
  public Id: string;
  public Name: string;
  public Surname: string;
  public Boss: Boss;

  constructor(id: string, name: string, surname: string, boss: Boss) {
    this.Id = id;
    this.Name = name;
    this.Surname = surname;
    this.Boss = boss;
  }
}
