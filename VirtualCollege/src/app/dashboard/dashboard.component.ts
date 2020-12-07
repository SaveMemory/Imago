import { Component, OnInit } from '@angular/core';
import { NavigationOption } from './models/NavigationOption';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public navigationOptions: Array<NavigationOption> = [
    new NavigationOption('Subjects'),
    new NavigationOption('Placeholder'),
    new NavigationOption('Placeholder')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
