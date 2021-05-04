import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationOption } from './models/NavigationOption';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public navigationOptions: Array<NavigationOption> = [
    new NavigationOption('KPI', 'kpi'),
    new NavigationOption('Placeholder', ''),
    new NavigationOption('Placeholder', '')
  ];

  public constructor(private router: Router, private route: ActivatedRoute) { }

  public ngOnInit(): void {
  }

  public onMenuOptionClick(route: string): void {
    this.router.navigate([route], { relativeTo: this.route});
  }

}
