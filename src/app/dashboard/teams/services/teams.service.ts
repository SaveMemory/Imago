import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from 'src/app/domain-models/Team';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private httpClient: HttpClient) { }

  public create(team: Team): Observable<Team> {
    return this.httpClient.post<Team>('https://localhost:5001/team', team);
  }
}
