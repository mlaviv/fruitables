import { Component } from '@angular/core';
import { ProductServiceService } from 'src/app/app-services/product-service.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent {


    allData!: any;

  constructor(private serv: ProductServiceService) {
    this.getData()
  }

  getData() {
    this.serv.get().subscribe((params) => {
      this.allData = params
    })
  }
}
