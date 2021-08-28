import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';
import { EmployeesService } from './services/employees.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HireEmployeesComponent } from './hire-employees/hire-employees.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [EmployeesComponent, HireEmployeesComponent, HireEmployeesComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule,
    MatCheckboxModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule
  ],
  providers: [EmployeesService]
})
export class EmployeesModule { }
