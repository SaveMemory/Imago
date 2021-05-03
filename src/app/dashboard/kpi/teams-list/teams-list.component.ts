import { Component, Input, OnInit } from '@angular/core';
import { Boss } from 'src/app/domain-models/Boss';
import { Team } from 'src/app/domain-models/Team';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.scss'],
})
export class TeamsListComponent implements OnInit {
  public panelOpenState = false;

  @Input('teams')
  public teams: Array<Team> = new Array<Team>();

  constructor() {

  }

  ngOnInit() {}
}
