import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [  // lazy loaded as mentioned
  {
    path: 'forms-submit',
    loadChildren: () => import('./form-submit/form-submit.module').then(m => m.FormSubmitModule)
  },
  {
    path: 'table-view',
    loadChildren: () => import('./table/table.module').then(m => m.TableModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
