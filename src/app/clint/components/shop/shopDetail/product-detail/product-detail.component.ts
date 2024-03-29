import { ProductInterface } from './../../../../../appInterfaces/product';
import { ProductServiceService } from './../../../../../app-services/product-service.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {


  productDetail!: ProductInterface
  constructor(private serv: ProductServiceService, private activeRout: ActivatedRoute) {
    this.getProductDetail()
  }



  getProductDetail() {
    let id = this.activeRout.snapshot.paramMap.get("id")

    this.serv.getById(id).subscribe((data) => {
      this.productDetail = data
    })
  }
}
