import { AppRoutingModule } from './../../../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { SheredModule } from '../shered/shered.module';
import { CartComponent } from './components/cart/cart.component';
import { ChackoutComponent } from './components/chackout/chackout.component';



@NgModule({
  declarations: [
    UserComponent,
    CartComponent,
    ChackoutComponent,
  ],
  imports: [
    CommonModule,SheredModule,AppRoutingModule
  ],
  exports: [
  UserComponent,

  ]
})
export class UserModule { }
