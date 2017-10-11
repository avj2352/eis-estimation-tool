import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map'; // for mapping response
import { LoginResponseModel } from './../../data/model/login-model';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';

@Injectable()
export class LoginService {
  headers: Headers;
  options: RequestOptions; 
  constructor(private http:Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json', 
    'Accept': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }//end:constructor

  loginUser(username:string,password:string): Observable<LoginResponseModel> {
    return this.http.post('http://INGBTCPIC5DTR98:8080/EISPortalTest/api/authorization/authenticate',{'username':username,'password':password},this.options)
      .map(res => {
        debugger;
        return res.json()
      })
      .catch((error)=>{
        return Observable.of(error);
      });
  }//end:loginUser

}//end:class-LoginService
