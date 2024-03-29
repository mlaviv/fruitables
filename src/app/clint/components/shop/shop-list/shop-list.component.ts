import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { ProductServiceService } from 'src/app/app-services/product-service.service';


@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent {

  allData!: any

  constructor(private serv : ProductServiceService , public ActivatedRoute : ActivatedRoute) {
    this.getData()
  }

  getData() {
    this.serv.get().subscribe((params) => {
      this.allData = params
    })
  }
}
