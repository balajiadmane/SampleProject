import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { LetnavComponent } from '../../component/layout/letnav/letnav.component';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {ToasterModule, ToasterService} from 'angular2-toaster';


@NgModule({
  declarations: [
    LetnavComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatSortModule,
    MatTableModule,
    MatDialogModule,
    ToasterModule.forRoot()
  ],
  exports:[
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    LetnavComponent,
    MatSortModule,
    MatTableModule,
    MatDialogModule,
    ToasterModule
  ]
})
export class SharedModule { }
