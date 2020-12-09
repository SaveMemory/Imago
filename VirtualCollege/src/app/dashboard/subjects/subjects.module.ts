import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectsRoutingModule } from './subjects-routing.module';
import { SubjectsComponent } from './subjects.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';


@NgModule({
  declarations: [SubjectsComponent],
  imports: [
    CommonModule,
    SubjectsRoutingModule,
    MatCardModule,
    MatGridListModule
  ]
})
export class SubjectsModule { }
