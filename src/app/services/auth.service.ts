import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }

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
    return this.httpClient.get('http://localhost:8008/api/v1/user', { headers: headers });
  }
}
