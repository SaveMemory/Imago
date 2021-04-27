import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {MatCardModule} from '@angular/material/card';
import { KPIComponent } from './kpi/kpi.component';

@NgModule({
  declarations: [DashboardComponent, KPIComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule,
    MatCardModule
  ]
})
export class DashboardModule { }
