import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.css']
})
export class SubHeaderComponent {

  URL!:any
  constructor(public activatedRoute : ActivatedRoute) {
    this.URL = this.activatedRoute.snapshot.url[0].path
  }
}
