import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user.component';
import { ListComponent } from './list/list.component';
import { CreatingComponent } from './creating/creating.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { userReducer } from '../store/user-reducer';
import { storeKey } from '../store/user-selector';
import { UserEffects } from '../store/user-effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


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
    ReactiveFormsModule,
    StoreModule.forFeature(storeKey, userReducer),
    EffectsModule.forRoot([UserEffects]),
    StoreDevtoolsModule.instrument()
  ]
})
export class UserModule { }
