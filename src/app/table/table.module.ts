import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableRoutingModule } from './table-routing.module';
import { TableComponent } from './table/table.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    TableRoutingModule,MaterialModule
  ]
})
export class TableModule { }
