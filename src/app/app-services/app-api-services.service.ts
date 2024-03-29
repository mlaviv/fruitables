import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppApiServicesService<type> {

  constructor(@Inject(String) public baseUrl: string, protected http: HttpClient , protected router : Router) { }


  get() : Observable<type> {
    return this.http.get<type>(this.baseUrl);
  }

  getById(id : any) : Observable<type> {
    return this.http.get<type>(this.baseUrl + `/${id}`)
  }

  post(object : type): Observable<type> {
    return this.http.post<type>(this.baseUrl , object)
  }

  put(id : number , object : type ): Observable<type> {
    return this.http.put<type>(this.baseUrl + `/${id}` , object)
  }

  delete(id: number): Observable<type> {
    return this.http.delete<type>(this.baseUrl + `/${id}`)
  }

  auth() {
    if (localStorage.getItem('admin')) {

  } else {
    this.router.navigateByUrl('/login')
  }
  }

}
