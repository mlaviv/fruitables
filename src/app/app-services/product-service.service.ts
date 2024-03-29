import { Injectable } from '@angular/core';
import { AppApiServicesService } from './app-api-services.service';
import { HttpClient } from '@angular/common/http';
import { ProductInterface } from '../appInterfaces/product';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService extends AppApiServicesService<ProductInterface> {

  constructor(protected override http : HttpClient , protected override router : Router) {
    super('http://localhost:3000/products' , http , router)
  }

}
