import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import {Buffer} from "buffer";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  userURL = 'http://localhost:8079/api/user';
  httpOptions = { headers: new HttpHeaders({'Content-Type' : 'application/json',
  'Authorization': `Bearer ${sessionStorage.getItem('access_token')}`})};

  constructor(private httpClient: HttpClient,
  ) { }

  public list(): Observable<User[]> {
    console.log(this.getRoles());
    const roles: string = encodeURIComponent(JSON.stringify(this.getRoles()));
    console.log(roles);
    return this.httpClient.get<User[]>(this.userURL + `?roles=${roles}`, this.httpOptions);
  }

  public detail(id: number): Observable<User> {
    return this.httpClient.get<User>(this.userURL + `/${id}`, this.httpOptions);
  }

  public create(user: User): Observable<any> {
    return this.httpClient.post<any>(this.userURL, user, this.httpOptions);
  }

  public update(id: number, user: User): Observable<any> {
    return this.httpClient.put<any>(this.userURL + `/${id}`, user, this.httpOptions);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.userURL + `/${id}`, this.httpOptions);
  }

  public getRoles(): string[]{
    const token: string = sessionStorage.getItem('access_token')??"";
    const payload = token.split('.')[1];
    const payloadDecodeJson = Buffer.from(payload,"base64").toString();
    const payloadDecoded = JSON.parse(payloadDecodeJson);
    return payloadDecoded.realm_access.roles;
  }
}
