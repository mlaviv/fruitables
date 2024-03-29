import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-tastimonial',
  templateUrl: './tastimonial.component.html',
  styleUrls: ['./tastimonial.component.css']
})
export class TastimonialComponent {

    customOptions: OwlOptions = {
    stagePadding: 50,
    loop:true,
    margin: 10,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
  }
}
