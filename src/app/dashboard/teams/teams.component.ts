import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/domain-models/Employee';
import { Team } from 'src/app/domain-models/Team';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  columns: string[] = [
    'name', 'size', 'boss', 'workforce'
  ]

  public teams: Array<Team> = [
    new Team('testId', 'testName', 5, new Employee('testBossId', "Janusz", "Kowalski", 0)),
    new Team('testId1', 'testName', 3, new Employee('testBossId', "Jan", "Kowalski", 0)),
    new Team('testId2', 'testName', 4, new Employee('testBossId', "Jerzy", "Kowalski", 0)),
    new Team('testId3', 'testName', 6, new Employee('testBossId', "Jacek", "Kowalski", 0))
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
