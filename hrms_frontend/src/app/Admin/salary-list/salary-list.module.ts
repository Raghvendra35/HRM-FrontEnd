import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalaryListComponent } from './salary-list.component';

import { RouterModule } from '@angular/router';
import { AdminModule } from '../admin.module';
import { SalaryListRouting } from './salary-list.routin.module';



@NgModule(
  {
  declarations: [SalaryListComponent],

  imports: [
    CommonModule,
    SalaryListRouting,
    RouterModule,
    //AdminModule
    
  ]
})
export class SalaryListModule { }
