import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { LoginUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  login(email:string, password:string)
  {
    return this.httpClient.post<LoginUser>(`${environment.api}/user/login`,{
      email,
      password
    });
  }

}
