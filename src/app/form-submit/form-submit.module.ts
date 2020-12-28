import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSubmitRoutingModule } from './form-submit-routing.module';
import { FormSubmitComponent } from './form-submit/form-submit.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [FormSubmitComponent],
  imports: [
    CommonModule,
    FormSubmitRoutingModule,MaterialModule
  ]
})
export class FormSubmitModule { }
