import { HttpClient } from '@angular/common/http';
import { Employee } from 'src/app/domain-models/Employee';
import { EmployeesService } from './employees.service';

describe('EmployeesService', () => {
  let service: EmployeesService;
  let httpSpy: HttpClient;

  beforeEach(() => {
    httpSpy = jasmine.createSpyObj('HttpClient', ['post']);

    service = new EmployeesService(httpSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('when create should call http client post method', () => {

    let testTeam = new Employee('testID', 'testTeam', 'crickets', 5);

    service.create(testTeam);

    expect(httpSpy.post).toHaveBeenCalled();
  });
});
