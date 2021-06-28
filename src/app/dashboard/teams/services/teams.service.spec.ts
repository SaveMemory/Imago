import { HttpClient } from '@angular/common/http';
import { Team } from 'src/app/domain-models/Team';
import { TeamsService } from './teams.service';

describe('TeamsService', () => {
  let service: TeamsService;
  let httpSpy: HttpClient;

  beforeEach(() => {
    httpSpy = jasmine.createSpyObj('HttpClient', ['post']);

    service = new TeamsService(httpSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('when create should call http client post method', () => {

    let testTeam = new Team('testTeam', 'crickets', 3, null as any);

    service.create(testTeam);

    expect(httpSpy.post).toHaveBeenCalled();
  });
});
