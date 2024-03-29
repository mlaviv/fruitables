import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './clint/components/home/home.component';
import { ShopComponent } from './clint/components/shop/shop.component';
import { ContactComponent } from './clint/components/home/components/contact/contact.component';
import { ShopDetailComponent } from './clint/components/shop/shopDetail/shopDetail.component';
import { CartComponent } from './clint/components/user/components/cart/cart.component';
import { ChackoutComponent } from './clint/components/user/components/chackout/chackout.component';
import { NotFoundComponent } from './clint/components/not-found/not-found.component';
import { ClintComponent } from './clint/clint.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './admin/components/login/login.component';
import { ProductsComponent } from './admin/components/products/products.component';
import { ShowProductComponent } from './admin/components/show-product/show-product.component';
import { AddProductComponent } from './admin/components/add-product/add-product.component';
import { EditProductComponent } from './admin/components/edit-product/edit-product.component';


const routes: Routes = [
  {
    path: '', component: ClintComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'shop', component: ShopComponent },
      { path: 'product details/:id', component: ShopDetailComponent },
      { path: 'cart', component: CartComponent },
      { path: 'chack out', component: ChackoutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'Not Found', component: NotFoundComponent },
    ]
  },
  {
    path: 'admin', component: AdminComponent, children: [
      { path: 'products', component: ProductsComponent },
      {path: 'show-product/:id' , component: ShowProductComponent},
      {path: 'add-product' , component: AddProductComponent},
      {path: 'edit-product/:id' , component: EditProductComponent},
    ]
  },
  { path:'login' , component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
