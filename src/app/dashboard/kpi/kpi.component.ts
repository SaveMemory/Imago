import { Component, OnInit } from '@angular/core';
import { Boss } from 'src/app/domain-models/Boss';
import { Team } from 'src/app/domain-models/Team';
import { Cost } from '../models/Cost';

@Component({
  selector: 'app-kpi',
  templateUrl: './kpi.component.html',
  styleUrls: ['./kpi.component.scss']
})
export class KPIComponent implements OnInit {

  public teamsList: Array<Team>;
  public costsList: Array<Cost>;

  constructor() {
    this.teamsList = [
      new Team(
        'not-so-valid-guid',
        'TestTeam',
        5,
        new Boss('definitely-not-a-guid', 'Mariusz', 'Sowinski', undefined)
      ),
      new Team(
        'not-so-valid-guid',
        'TestTeam',
        5,
        new Boss('definitely-not-a-guid', 'Mariusz', 'Sowinski', undefined)
      ),
      new Team(
        'not-so-valid-guid',
        'TestTeam',
        5,
        new Boss('definitely-not-a-guid', 'Mariusz', 'Sowinski', undefined)
      ),
      new Team(
        'not-so-valid-guid',
        'TestTeam',
        5,
        new Boss('definitely-not-a-guid', 'Mariusz', 'Sowinski', undefined)
      ),
    ];

    this.costsList = [
      new Cost(5000, "Paperwork", "Administration"),
      new Cost(400, "Alcohol", "Party"),
      new Cost(140, "Lcd monitor", "Resources"),
      new Cost(50, "Toilet paper", "Administration")
    ]
  }

  public ngOnInit(): void {
    //TODO
    //this.Teams = teamService.GetTeamsForUser();
  }



}
