import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from 'src/app/app-services/product-service.service';
import { ProductInterface } from 'src/app/appInterfaces/product';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent {

  id!:any
productDetail!: ProductInterface
  constructor(private serv: ProductServiceService , private activLink : ActivatedRoute) {
    this.id = this.activLink.snapshot.paramMap.get('id')
    this.serv.getById(this.id).subscribe((data) => {
      this.productDetail = data
    })
  }
}
