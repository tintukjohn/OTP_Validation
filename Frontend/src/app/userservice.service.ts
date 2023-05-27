import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserserviceService {
  apiUrl: String = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  addUser(data: any) {
    return this.http.post(`${this.apiUrl}/addUser`, data);
  }

  userLogin(user: any) {
    return this.http.get(`${this.apiUrl}/getUser/`, user);
  }
}
