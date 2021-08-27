import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KPIRoutingModule } from './kpi-routing.module';
import { KPIComponent } from './kpi.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    KPIComponent
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
