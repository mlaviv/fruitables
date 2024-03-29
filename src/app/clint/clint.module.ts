import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClintComponent } from './clint.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { SheredModule } from './components/shered/shered.module';
import { UserModule } from './components/user/user.module';
import { ShopModule } from './components/shop/shop.module';
import { HomeModule } from './components/home/home.module';



@NgModule({
  declarations: [
    ClintComponent,
  ],
  imports: [
    CommonModule,AppRoutingModule,SheredModule,UserModule,ShopModule,HomeModule
  ],
  exports: [
  ]
})
export class ClintModule { }
