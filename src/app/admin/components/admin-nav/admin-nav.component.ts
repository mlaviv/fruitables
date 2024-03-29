import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent {

constructor(private router : Router){}
  logOut() {
    localStorage.removeItem('admin');
    this.router.navigateByUrl("login")
  }
}
