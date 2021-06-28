import { Employee } from "./Employee";

export class Team {
  public id: string;
  public name: string;
  public size: number;
  public boss: Employee;
  public members: Array<Employee>;
  public jointWorkforce: number = 0;

  constructor(id: string, name: string, size: number, boss: Employee) {
    this.id = id
    this.name = name;
    this.size = size;
    this.boss = boss;
    this.members = new Array<Employee>();
  }

  public addMember(member: Employee): void {
    this.members.push(member);
  }

  public addMultipleMembers(members: Array<Employee>): void {
    this.members = members;
  }
}
