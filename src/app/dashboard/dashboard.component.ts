import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Kpi } from './models/kpi';
import { NavigationOption } from './models/NavigationOption';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public kpi: Kpi = new Kpi();

  public navigationOptions: Array<NavigationOption> = [
    new NavigationOption('KPI', 'kpi'),
    new NavigationOption('Employees', 'employees'),
    new NavigationOption('Placeholder', '')
  ];

  public constructor(private router: Router, private route: ActivatedRoute) { }

  public ngOnInit(): void {
    this.kpi.capital = 50000;
    this.kpi.cost = 4000;
    this.kpi.dailyGrowth = 1000;
    this.kpi.dailyIncome = 5000;
  }

  public onMenuOptionClick(route: string): void {
    this.router.navigate([route], { relativeTo: this.route});
  }

}
