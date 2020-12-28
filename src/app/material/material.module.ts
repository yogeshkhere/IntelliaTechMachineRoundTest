import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatCardModule,MatSnackBarModule,MatTableModule ,MatIconModule,MatButtonModule, MatPaginatorModule, MatProgressSpinnerModule, MatToolbarModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,MatFormFieldModule,MatInputModule,MatCardModule,MatButtonModule,MatSnackBarModule,
    MatIconModule,MatTableModule,MatPaginatorModule,MatProgressSpinnerModule,MatToolbarModule,FlexLayoutModule
  ],
  exports: [
    CommonModule,FormsModule,ReactiveFormsModule,MatFormFieldModule,MatInputModule,MatCardModule,MatButtonModule,MatSnackBarModule,
    MatIconModule,MatTableModule,MatPaginatorModule,MatProgressSpinnerModule,MatToolbarModule,FlexLayoutModule
  ],
})
export class MaterialModule { }
