import { SheredModule } from './../shered/shered.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component';
import { OffersComponent } from './components/offers/offers.component';
import { OfferComponent } from './components/offer/offer.component';
import { BestSellerComponent } from './components/best-seller/best-seller.component';
import { RatesComponent } from './components/rates/rates.component';
import { ContactComponent } from './components/contact/contact.component';
import { MiniViewProductsComponent } from './components/mini-view-products/mini-view-products.component';
import { SwiperProductsComponent } from './components/swiper-products/swiper-products.component';
import { TastimonialComponent } from './components/tastimonial/tastimonial.component';
import { HomeComponent } from './home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    ServicesComponent,
    OffersComponent,
    OfferComponent,
    BestSellerComponent,
    RatesComponent,
    ContactComponent,
    MiniViewProductsComponent,
    SwiperProductsComponent,
    TastimonialComponent,
  ],
  imports: [
    CommonModule,CarouselModule,SheredModule

  ],
  exports: [
    HomeComponent,
    HeroComponent,
    ServicesComponent,
    OffersComponent,
    OfferComponent,
    BestSellerComponent,
    RatesComponent,
    ContactComponent,
    MiniViewProductsComponent,
    SwiperProductsComponent,
    TastimonialComponent
  ]
})
export class HomeModule { }
