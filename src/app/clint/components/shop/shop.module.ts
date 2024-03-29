import { AppRoutingModule } from './../../../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopListComponent } from './shop-list/shop-list.component';
import { FeaturedComponent } from './shopSidbar/featured/featured.component';
import { CategoriesComponent } from './shopSidbar/categories/categories.component';
import { ShopComponent } from './shop.component';
import { SheredModule } from '../shered/shered.module';
import { ProductDetailComponent } from './shopDetail/product-detail/product-detail.component';
import { RelatedProductsComponent } from './shopDetail/related-products/related-products.component';
import { ShopDetailComponent } from './shopDetail/shopDetail.component';
import { CarouselModule } from 'ngx-owl-carousel-o';



@NgModule({
  declarations: [
    ShopComponent,
    ShopListComponent,
    FeaturedComponent,
    CategoriesComponent,
    ProductDetailComponent,
    RelatedProductsComponent,
    ShopDetailComponent
  ],
  imports: [
    CommonModule,SheredModule,CarouselModule,AppRoutingModule
  ],
  exports: [
    ShopComponent,
    ShopListComponent,
    FeaturedComponent,
    CategoriesComponent,
    ShopDetailComponent

  ]
})
export class ShopModule { }
