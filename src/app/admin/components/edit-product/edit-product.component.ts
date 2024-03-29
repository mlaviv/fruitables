import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from 'src/app/app-services/product-service.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {

  productForm!:any
  productObj!: any
  id!:any

  constructor(private serv: ProductServiceService, private router: Router, private activLink: ActivatedRoute) {
    console.log('edit works');

    this.id = this.activLink.snapshot.paramMap.get('id')
    this.serv.getById(this.id).subscribe((data) => {
      this.productObj = data

    this.productForm = new FormGroup({
    id: new FormControl(this.productObj.id),
    name : new FormControl(this.productObj.name),
    Category : new FormControl(this.productObj.Category),
    imgUrl : new FormControl(this.productObj.imgUrl),
    description : new FormControl(this.productObj.description),
    price : new FormControl(this.productObj.price),
    rate : new FormControl(this.productObj.rate),
    Organic : new FormControl(this.productObj.Organic),
    Fresh : new FormControl(this.productObj.Fresh),
    Sales : new FormControl(this.productObj.Sales),
    Discount : new FormControl(this.productObj.Discount),
    Expired : new FormControl(this.productObj.Expired),
  })
    })

}

  editProduct() {
    this.productObj = this.productForm.value
    this.serv.put(this.id ,this.productObj).subscribe((data) => {
      this.router.navigateByUrl('/admin/products')
    })
  }
}
