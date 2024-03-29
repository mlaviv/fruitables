import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/app-services/product-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {


  ProductsData! : any


  constructor(private serv: ProductServiceService) {
    this.serv.get().subscribe((data) => {

      this.ProductsData = data

      this.serv.auth()
  })
  }

  deleteProduct(id:any) {
    this.serv.delete(id).subscribe((params) => {

    })
  }


}
