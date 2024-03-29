import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductServiceService } from 'src/app/app-services/product-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {


  productObj!: any

  constructor(private serv : ProductServiceService , private router : Router) {

}
  productForm = new FormGroup({
    id: new FormControl(),
    name : new FormControl(''),
    Category : new FormControl(''),
    imgUrl : new FormControl(''),
    description : new FormControl(''),
    price : new FormControl(0),
    rate : new FormControl(0),
    Organic : new FormControl(false),
    Fresh : new FormControl(false),
    Sales : new FormControl(false),
    Discount : new FormControl(false),
    Expired : new FormControl(false),
  })


  addProduct() {
    this.productForm.controls.id.setValue(`${Math.floor(Math.random() * 5001)}`)
    this.productObj = this.productForm.value
    this.serv.post(this.productObj).subscribe((data) => {
      this.router.navigateByUrl('/admin/products')
    })
  }
}
