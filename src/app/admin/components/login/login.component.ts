import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { AdminService } from 'src/app/app-services/admin.service';
import { Admin } from 'src/app/appInterfaces/admin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  massage=''
  email = new FormControl('',Validators.email)
  password = new FormControl()

  constructor(private serv : AdminService , private router : Router){}


  login() {
    let id: number
    this.serv.get().subscribe((data: any) => {
      let user = data.find((obj: Admin) => {
        id = obj.id
        return obj.email == this.email.value && obj.password == this.password.value ? true : false
      })

      if (user) {
        console.log("login");
        localStorage.setItem("admin", user)
        this.router.navigateByUrl(`admin`)
      } else {
        this.massage= 'invalid email or password'
        setTimeout(() => {
        this.massage= ''
        }, 2000);
      }
    })
  }
}
