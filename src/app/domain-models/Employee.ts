import { Boss } from "./Boss";

export class Employee {
  public id: string;
  public name: string;
  public surname: string;
  public boss?: Boss;
  public workforce: number;

  constructor(id: string, name: string, surname: string,  workforce: number, boss?: Boss) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.boss = boss;
    this.workforce = workforce
  }

  public setBoss(boss: Boss): void {
    this.boss = boss;
  }
}
