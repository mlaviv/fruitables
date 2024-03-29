import { Injectable } from '@angular/core';
import { AppApiServicesService } from './app-api-services.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService extends AppApiServicesService<AddEventListenerOptions> {

  constructor(protected override http : HttpClient ,protected override router : Router) {
    super('http://localhost:3000/admins' , http , router)
  }
}
