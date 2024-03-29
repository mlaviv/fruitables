import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminNavComponent } from './components/admin-nav/admin-nav.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { ShowProductComponent } from './components/show-product/show-product.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';



@NgModule({
  declarations: [
    AdminComponent,
    AdminNavComponent,
    LoginComponent,
    ProductsComponent,
    ShowProductComponent,
    AddProductComponent,
    EditProductComponent

  ],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,AppRoutingModule
  ],
  exports: [
    AdminComponent,
    AdminNavComponent
  ]
})
export class AdminModule { }
