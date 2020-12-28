import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormSubmitComponent } from './form-submit/form-submit.component';


const routes: Routes = [
  {path : '', component : FormSubmitComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormSubmitRoutingModule { }
