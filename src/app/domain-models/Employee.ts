export class Employee {
  public id: string;
  public forename: string;
  public surname: string;
  public workforce: number;

  constructor(id: string, forename: string, surname: string,  workforce: number) {
    this.id = id;
    this.forename = forename;
    this.surname = surname;
    this.workforce = workforce
  }
}
