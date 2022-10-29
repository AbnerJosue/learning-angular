import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import {AuthService} from './auth.service'

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(
    private authservice: AuthService
  ){}

  intercept(req:any, next: any) {
    const tokennizeRequest = req.clone({
      setHeaders:{
        Authorization: `Bearer ${this.authservice.getToken()}`
      }
    })
    return next.handle(tokennizeRequest)
  }

}
