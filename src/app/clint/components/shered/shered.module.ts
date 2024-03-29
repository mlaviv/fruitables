import { AppRoutingModule } from './../../../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterrComponent } from './components/footerr/footerr.component';
import { SubHeaderComponent } from './components/sub-header/sub-header.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterrComponent,
    SubHeaderComponent
  ],
  imports: [
    CommonModule,AppRoutingModule
  ],
  exports: [
    HeaderComponent,
    FooterrComponent,
    SubHeaderComponent
  ]
})
export class SheredModule { }
