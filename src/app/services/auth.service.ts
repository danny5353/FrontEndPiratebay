import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Refresh } from '../components/Inteface/refresh';
import { tableClient } from '../components/Inteface/tableClient';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'd'
  constructor(private httpClient:HttpClient) {  
    
  }
  login(data){
    return this.httpClient.post('http://localhost:8008/api/v1/security/login',data)
  }
  
  settoken(token) {
    localStorage.setItem('token', 'bearer '+ token);
  }
  gettoken() {
    return localStorage.getItem('token');
  }

  setrefresh(tokenrefresh) {
    localStorage.setItem('tokenrefresh', tokenrefresh);
  }
  getrefresh() {
    return localStorage.getItem('tokenrefresh');
  }
  remove() {
    localStorage.removeItem('token');
  }
  getDatos(token): Observable<any> {
    let headers = new HttpHeaders().set('Authorization',token);
    return this.httpClient.get('http://localhost:8008/api/v1/user',{ headers: headers });
  }
  getDatosTable(tableClient): Observable<any> {
    let headers = new HttpHeaders().set('Authorization',tableClient);
    return this.httpClient.get('http://localhost:8008/api/v1/order',{ headers: headers });
  }
  refresh() {
    let token = this.gettoken();
    let refresh = this.getrefresh();
    let headers = new HttpHeaders().set('Authorization','bearer '+ token);
    let objRefresh = new Refresh();
    objRefresh.refreshToken = refresh;
    return this.httpClient.post('http://localhost:8008/api/v1/security/refresh', objRefresh, { headers: headers })
  }
}