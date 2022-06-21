import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user.component';
import { ListComponent } from './list/list.component';
import { CreatingComponent } from './creating/creating.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserComponent,
    ListComponent,
    CreatingComponent
  ],
  exports: [
    UserComponent,
    
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
