import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KPIRoutingModule } from './kpi-routing.module';
import { KPIComponent } from './kpi.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { TeamsListComponent } from './teams-list/teams-list.component';
import { MatListModule } from '@angular/material/list';
import { CostsListComponent } from './costs-list/costs-list.component';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    KPIComponent,
    TeamsListComponent,
    CostsListComponent
  ],
  imports: [
    CommonModule,
    KPIRoutingModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatDividerModule
  ]
})
export class KPIModule { }
