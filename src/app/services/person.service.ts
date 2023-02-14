import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  userURL = 'http://localhost:8079/person/';
  httpOptions = { headers: new HttpHeaders({'Content-Type' : 'application/json', 
  'Authorization': `Bearer ${sessionStorage.getItem('access_token')}`})};

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(this.userURL, this.httpOptions);
  }

  public detail(id: number): Observable<Person> {
    return this.httpClient.get<Person>(this.userURL + `${id}`, this.httpOptions);
  }

  public create(user: Person): Observable<any> {
    return this.httpClient.post<any>(this.userURL, user, this.httpOptions);
  }

  public update(id: number, user: Person): Observable<any> {
    return this.httpClient.put<any>(this.userURL + id, user, this.httpOptions);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.userURL + id, this.httpOptions);
  }
}
