import { Component } from '@angular/core';
import { AdminService } from '../app-services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(private serv: AdminService) {
    this.serv.auth()
  }


}
